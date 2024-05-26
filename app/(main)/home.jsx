import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const openCamera = () => {
    launchCamera({}, (response) => {
      console.log(response)

      toggleModal()
    })
  }

  const openGallery = () => {
    launchImageLibrary({}, (response) => {
      console.log(response)

      toggleModal()
    })
  }

  return (
    <View className='p-4 bg-white'>
      <Text className='text-3xl text-center mb-4 font-semibold'>
        Leaf Disease Detection
      </Text>
      <TouchableOpacity onPress={toggleModal}>
        <Text className='text-center text-blue-500'>Choose Image</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View className='p-4 bg-white rounded-lg'>
          <Text className='text-lg mb-4 text-center'>Select Option</Text>
          <Button title='Open Camera' onPress={openCamera} />
          <Button title='Open Gallery' onPress={openGallery} />
          <Button title='Cancel' onPress={toggleModal} />
        </View>
      </Modal>
      <StatusBar style='auto' />
    </View>
  )
}

export default Home
