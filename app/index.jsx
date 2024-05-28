import React, { useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import { useRouter } from 'expo-router'

export default function App() {
  const [loading, setLoading] = useState(0)
  const router = useRouter()

  useEffect(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 1
      setLoading(progress)
      if (progress >= 100) {
        clearInterval(interval)
        router.push('/home')
      }
    }, 15)
  }, [router])

  return (
    <View className='flex-1 items-center justify-center '>
      <Image
        source={require('../assets/mainLogo.png')}
        className='object-contain'
      />
      <Text className='text-3xl my-2 '>Crops disease detection</Text>
      <Text>University Batna-2</Text>
      {/* <Text className=''>{loading}%</Text> */}
      {/* <View className='w-4/5 h-2 border border-black rounded overflow-hidden mt-2'>
        <View
          className='h-full bg-[#007537]'
          style={{ width: `${loading}%` }}
        />
      </View> */}
    </View>
  )
}
