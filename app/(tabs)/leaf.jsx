import { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import Collapsible from 'react-native-collapsible'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Leaf = () => {
  const [activeSections, setActiveSections] = useState([])

  const toggleSection = (section) => {
    setActiveSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((s) => s !== section)
        : [section]
    )
  }

  const diseases = [
    {
      name: 'Corn (Maize)',
      classes: [
        {
          name: 'Healthy',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'This is a healthy corn plant.',
        },
        {
          name: 'Common Rust',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Common rust is caused by Puccinia sorghi.',
        },
        {
          name: 'Blight',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Blight is a serious disease affecting corn.',
        },
        {
          name: 'Gray Leaf Spot',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Gray leaf spot is caused by Cercospora zeae-maydis.',
        },
      ],
    },
    {
      name: 'Wheat',
      classes: [
        {
          name: 'Healthy',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'This is a healthy wheat plant.',
        },
        {
          name: 'Septoria',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Septoria leaf blotch is a fungal disease of wheat.',
        },
        {
          name: 'Stripe Rust',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Stripe rust is caused by Puccinia striiformis.',
        },
      ],
    },
    {
      name: 'Tomato',
      classes: [
        {
          name: 'Healthy',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'This is a healthy tomato plant.',
        },
        {
          name: 'Mosaic Virus',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Mosaic virus causes mottling and distortion of leaves.',
        },
        {
          name: 'Target Spot',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Target spot is caused by Corynespora cassiicola.',
        },
        {
          name: 'Bacterial Spot',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Bacterial spot is caused by Xanthomonas campestris.',
        },
        {
          name: 'Yellow Leaf Curl Virus',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Yellow leaf curl virus is transmitted by whiteflies.',
        },
        {
          name: 'Leaf Mold',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Leaf mold is caused by Fulvia fulva.',
        },
        {
          name: 'Early Blight',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Early blight is caused by Alternaria solani.',
        },
        {
          name: 'Spider Mites Two-Spotted Spider Mite',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Two-spotted spider mites cause stippling and webbing.',
        },

        {
          name: 'Septoria Leaf Spot',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Septoria leaf spot is caused by Septoria lycopersici.',
        },
      ],
    },
    {
      name: 'Apple',
      classes: [
        {
          name: 'Healthy',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'This is a healthy apple tree.',
        },
        {
          name: 'Rust',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Apple rust is caused by Gymnosporangium spp.',
        },
        {
          name: 'Scab',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Apple scab is caused by Venturia inaequalis.',
        },
      ],
    },
    {
      name: 'Cucumber',
      classes: [
        {
          name: 'Healthy',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'This is a healthy cucumber plant.',
        },
        {
          name: 'Anthracnose',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Anthracnose is caused by Colletotrichum orbiculare.',
        },
        {
          name: 'Bacterial Wilt',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Bacterial wilt is caused by Erwinia tracheiphila.',
        },
        {
          name: 'Downy Mildew',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Downy mildew is caused by Pseudoperonospora cubensis.',
        },
        {
          name: 'Gummy Stem Blight',
          image:
            'https://hort.extension.wisc.edu/files/2014/11/CedarAppleRust_apple.png',
          description: 'Gummy stem blight is caused by Didymella bryoniae.',
        },
      ],
    },
  ]

  return (
    <View className='p-4 flex-1'>
      <Text className='text-3xl text-center mb-4 font-semibold'>
        Disease that can be detected
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {diseases.map((disease, index) => (
          <View key={index} className='w-full my-2'>
            <TouchableOpacity
              onPress={() => toggleSection(index)}
              className='bg-gray-200 p-2 rounded flex-row justify-between items-center'
            >
              <Text className='text-lg'>{disease.name}</Text>
              <Icon
                name={
                  activeSections.includes(index) ? 'expand-less' : 'expand-more'
                }
                size={24}
                color='black'
              />
            </TouchableOpacity>
            <Collapsible
              collapsed={!activeSections.includes(index)}
              className='bg-white p-4 border border-gray-200 rounded'
            >
              {disease.classes.map((classe, subIndex) => (
                <View key={subIndex} className='my-2'>
                  <Text className='text-base font-semibold'>
                    {classe.name}:
                  </Text>
                  <Text className='text-sm text-gray-600'>
                    {classe.description}
                  </Text>
                  <Image
                    source={{ uri: classe.image }}
                    className='h-20 mt-2'
                    resizeMode='contain'
                  />
                </View>
              ))}
            </Collapsible>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Leaf
