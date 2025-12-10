import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const home = () => {
  return (
    <View className="flex-1 justify-center items-center">
   <Link href="/" className="bg-black border text-white mb-4 px-4 py-2 rounded">Go to Index</Link>
        <Text>Home Screen</Text>
    </View>
  )
}
export default home