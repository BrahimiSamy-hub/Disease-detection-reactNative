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
    }, 10)
  }, [router])

  return (
    <View className='flex-1 items-center justify-center '>
      <Image
        source={require('../assets/animation.png')}
        className='w-48 h-48 border-2 rounded border-[#007537]'
      />
      {/* <Text className='text-xl text-[#007537] mb-2'>{loading}%</Text> */}
      {/* <View className='w-4/5 h-2 border border-black rounded overflow-hidden mt-2'>
        <View
          className='h-full bg-[#007537]'
          style={{ width: `${loading}%` }}
        />
      </View> */}
    </View>
  )
}
