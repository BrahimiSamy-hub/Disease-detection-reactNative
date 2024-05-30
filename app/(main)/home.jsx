import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native'
import leaf from '../../assets/leaf.png'
import ActionSheet from 'react-native-actionsheet'
import * as ImagePicker from 'expo-image-picker'
import ImageModal from '../../components/ImageModal'

const Home = () => {
  const actionSheetRef = useRef()
  const [image, setImage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const showActionSheet = () => {
    actionSheetRef.current.show()
  }

  const handleActionPress = async (index) => {
    if (index === 0) {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

      if (permissionResult.granted === false) {
        Alert.alert("You've refused to allow this app to access your camera!")
        return
      }

      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri)
        startScanAnimation()
        setModalVisible(true)
      }
    } else if (index === 1) {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (permissionResult.granted === false) {
        Alert.alert("You've refused to allow this app to access your photos!")
        return
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri)
        startScanAnimation()
        setModalVisible(true)
      }
    }
  }

  //animation
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
      <View className='p-4 bg-white flex-1'>
        <Text className='text-3xl mb-4 font-semibold'>
          Leaf Disease Detection
        </Text>
        <View className='flex-1 justify-center items-center'>
          <TouchableOpacity
            className='w-64 h-64 border-2 border-[#007537] justify-center rounded'
            onPress={showActionSheet}
          >
            {!image && (
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
            )}
            {image && (
              <View className=''>
                <Image
                  source={{ uri: image }}
                  style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                />
                <Animated.View
                  className='absolute top-0 left-0 right-0 h-full bg-white opacity-50'
                  style={{
                    transform: [{ translateY }],
                  }}
                />
              </View>
            )}
          </TouchableOpacity>
          <Text className='mt-4 font-bold color-red-500'>
            Note: for better results center ur leaf
          </Text>
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
        visible={modalVisible}
        imageUri={image}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}

export default Home
