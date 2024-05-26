import { Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import leaf from '../../assets/leaf.png'
import detection from '../../assets/detection.png'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center flex flex-col justify-center gap-1 mt-8'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-8 h-8'
      />
      <Text
        className={`${focused ? 'font-semibold' : 'font-normal'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <View className='flex-1 justify-center'>
        <Tabs
          options={{ headerShown: false }}
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#007537',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderTopWidth: 0.5,
              borderTopColor: 'gray',
              height: 65,
            },
          }}
        >
          <Tabs.Screen
            name='home'
            options={{
              title: 'Detection',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={detection}
                  color={color}
                  name='Detection'
                  focused={focused}
                />
              ),
            }}
          />
          <Tabs.Screen
            name='leaf'
            options={{
              title: 'Leaves',
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={leaf}
                  color={color}
                  name='Leaves'
                  focused={focused}
                />
              ),
            }}
          />
        </Tabs>
      </View>
    </>
  )
}

export default TabsLayout
