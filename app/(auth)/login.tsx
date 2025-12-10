import { Link } from 'expo-router'
import React from 'react'
import { View ,Text} from 'react-native'

function login() {
  return (
    <View className='flex-1 justify-center items-center'>
     <Link href="/" className="bg-black border text-white mb-4 px-4 py-2 rounded">Go to Index</Link>
    <Text>login</Text>
</View>
  )
}

export default login
