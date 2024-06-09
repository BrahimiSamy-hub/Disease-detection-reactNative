import { useState, useEffect } from 'react'
import { Modal, Text, Pressable, Image, View } from 'react-native'

const ImageModal = ({ visible, imageUri, onClose, result }) => {
  const [modalVisible, setModalVisible] = useState(visible)

  useEffect(() => {
    setModalVisible(visible)
  }, [visible])

  const handleClose = () => {
    setModalVisible(false)
    if (onClose) onClose()
  }

  // Determine the highest probability
  let highestProbability = ''
  if (result?.topProbabilities) {
    const probabilities = Object.entries(result.topProbabilities).map(
      ([key, value]) => ({
        key,
        value: parseFloat(value),
      })
    )
    highestProbability = probabilities.reduce(
      (max, p) => (p.value > max.value ? p : max),
      probabilities[0]
    ).key
  }

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
      <View className='flex-1 justify-center items-center '>
        <View
          className='bg-white rounded-xl p-4 shadow shadow-black w-80  '
          onStartShouldSetResponder={() => true}
        >
          <Text className='text-center font-bold mb-4 text-3xl'> Results</Text>
          <View className='items-center'>
            <Image
              source={{ uri: imageUri }}
              className='w-56 h-56 border border-emerald-700 rounded '
              resizeMode='fill'
            />
          </View>
          <View className='flex gap-2 mt-2 '>
            {result?.topProbabilities &&
              Object.entries(result.topProbabilities).map(
                ([key, value], index) => (
                  <Text
                    key={index}
                    className={`items-left font-semibold ${
                      key === highestProbability ? 'text-green-500' : ''
                    }`}
                  >
                    {key}: {value}
                  </Text>
                )
              )}
          </View>
          <Pressable
            className='bg-emerald-700 rounded-2xl p-2 mt-4 '
            onPress={handleClose}
          >
            <Text className='text-white font-bold text-center '>Hide</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default ImageModal
