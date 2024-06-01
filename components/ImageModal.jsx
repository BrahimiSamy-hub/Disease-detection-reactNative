import { useState, useEffect } from 'react'
import { Modal, Text, Pressable, Image, View } from 'react-native'

const ImageModal = ({ visible, imageUri, onClose, result }) => {
  const [modalVisible, setModalVisible] = useState(visible)

  useEffect(() => {
    setModalVisible(visible)
  }, [visible])

  console.log('result', result)

  const handleClose = () => {
    setModalVisible(false)
    if (onClose) onClose()
  }

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
      <View className='flex-1 justify-center items-center '>
        <View
          className='bg-white rounded-xl p-4 shadow shadow-black '
          onStartShouldSetResponder={() => true}
        >
          <Text className='text-center font-bold mb-4 text-3xl'> Results</Text>
          <Image
            source={{ uri: imageUri }}
            className='w-56 h-56 border border-emerald-700 rounded'
            resizeMode='fill'
          />
          <View className='flex gap-2 mt-2 font-semibold'>
            <Text className='items-left'>{result?.predictedClass}</Text>
            <Text className='items-left'>Scab 1.3%</Text>
            <Text className='items-left'>Rust 0.7%</Text>
          </View>
          <Pressable
            className='bg-emerald-700 rounded-2xl p-2 mt-4 '
            onPress={handleClose}
          >
            <Text className='text-white font-bold text-center '>
              Hide Modal
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default ImageModal
