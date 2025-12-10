import { Link } from 'expo-router'
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class sample extends Component {
  render() {
    return (
      <View className='flex-1 justify-center items-center'>
        <Link href="/" className="bg-black border text-white mb-4 px-4 py-2 rounded">Go to Index</Link>
        <Text> Sample Page </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
