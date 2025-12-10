import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <View className='flex-1 w-full'>
       
        <Slot />
         <View className='bg-blue-500 w-full p-5 justify-center items-center'>
      <Text>This is the footer</Text>
      </View>
    </View>
  )
}

export default RootLayout