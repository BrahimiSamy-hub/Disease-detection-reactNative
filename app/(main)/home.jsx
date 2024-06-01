import React, { useRef, useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native'
import leaf from '../../assets/leaf.png'
import ActionSheet from 'react-native-actionsheet'
import * as ImagePicker from 'expo-image-picker'
import ImageModal from '../../components/ImageModal'

import axios from 'axios'
import { crops } from '../../constants/constant'

const Home = () => {
  const actionSheetRef = useRef()
  const [image, setImage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [result, setResult] = useState(null)
  const [selectedCrop, setSelectedCrop] = useState(null)
  const [message, setMessage] = useState('')

  const handlePress = (crop) => {
    setSelectedCrop(crop.name)
    setMessage('')
  }

  const showActionSheet = () => {
    if (!selectedCrop) {
      setMessage('Please select a crop before uploading an image.')
    } else {
      setMessage('')
      actionSheetRef.current.show()
    }
  }

  const handleActionPress = async (index) => {
    if (index === 0) {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

      if (permissionResult.granted === false) {
        setMessage("You've refused to allow this app to access your camera!")
        return
      }

      let result = await ImagePicker.launchCameraAsync({
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri)
        startScanAnimation()
        setModalVisible(true)
        uploadImage(result.assets[0].uri)
      }
    } else if (index === 1) {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (permissionResult.granted === false) {
        setMessage("You've refused to allow this app to access your photos!")
        return
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri)
        startScanAnimation()
        setModalVisible(true)
        uploadImage(result.assets[0].uri)
      }
    }
  }

  const uploadImage = async (imageUri) => {
    const formData = new FormData()
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    })

    try {
      const response = await axios.post(
        'http://192.168.1.7:5000/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      const predictedClass = response.data.result.predicted_class
      const probabilities = response.data.result.probabilities

      const sortedProbabilities = Object.entries(probabilities)
        .sort(([, a], [, b]) => parseFloat(b) - parseFloat(a))
        .slice(0, 3)
        .reduce((acc, [key, value]) => {
          acc[key] = value
          return acc
        }, {})

      setResult({
        predictedClass,
        topProbabilities: sortedProbabilities,
      })
    } catch (error) {
      if (error.response) {
        console.error('Server response error:', error.response.data)
      } else if (error.request) {
        console.error('No response received:', error.request)
      } else {
        console.error('Error setting up request:', error.message)
      }
    }
  }

  const scanAnim = useRef(new Animated.Value(0)).current
  const windowHeight = Dimensions.get('window').height

  const startScanAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start()
  }

  const translateY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [windowHeight, 0],
  })

  return (
    <>
      <View className='p-4 bg-[#00753705]  flex-1'>
        <Text className='text-3xl mb-4 font-bold text-center'>
          Leaf Disease Detection
        </Text>
        <View className=''>
          <Text className='text-lg font-semibold text-center mb-4'>
            Choose the desired crop
          </Text>
          <View className='flex-row flex-wrap justify-center gap-2 w-full'>
            {crops.map((crop) => (
              <TouchableOpacity
                key={crop.id}
                className={`w-24 items-center p-2 border rounded mb-3 ${
                  selectedCrop === crop.name
                    ? 'border-emerald-500'
                    : 'border-gray-300'
                }`}
                onPress={() => handlePress(crop)}
              >
                <Image
                  source={crop.icon}
                  className='w-8 h-8 mb-2 bg-[#00753705]'
                />
                <Text className='text-base'>{crop.name}</Text>
              </TouchableOpacity>
            ))}
            {message ? (
              <Text className='text-red-500 mt-2'>{message}</Text>
            ) : null}
          </View>
        </View>

        <View className='flex-1 justify-center items-center gap-5'>
          <TouchableOpacity
            className='w-64 h-64 border-2 border-[#007537] justify-center rounded '
            onPress={showActionSheet}
          >
            <>
              <Image
                source={leaf}
                className='w-20 h-20'
                style={{
                  width: '100%',
                  resizeMode: 'contain',
                }}
              />
              <Text className='text-center p-2 font-semibold'>
                Tap to upload an image or use the camera
              </Text>
            </>
          </TouchableOpacity>

          {/* <Text className='mt-4 font-bold color-red-500'>
            Note: for better results center your leaf
          </Text> */}
        </View>

        <ActionSheet
          ref={actionSheetRef}
          options={['Camera', 'Gallery', 'Cancel']}
          cancelButtonIndex={2}
          onPress={handleActionPress}
        />

        <StatusBar style='auto' />
      </View>
      <ImageModal
        result={result}
        visible={modalVisible}
        imageUri={image}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}

export default Home
