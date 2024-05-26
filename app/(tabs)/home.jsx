import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
// import { Link } from 'expo-router'

const Home = () => {
  return (
    <View className=' items-center p-4'>
      <Text className='text-3xl'>Leaf Disease Detection</Text>
      <StatusBar style='auto' />
      {/* <Link href='/home' style={{ color: 'blue' }}>
        Go to home
      </Link> */}
    </View>
  )
}
export default Home
