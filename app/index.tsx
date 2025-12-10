import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import "../global.css"
import { Link } from 'expo-router'

const Index = () => {

    const [data, setData] = useState("")

    return (
        <View style={styles.container} className="bg-green-200">

            <Text className="text-3xl font-bold text-green-700 mb-6">Welcome!</Text>

            <Link
                href={"/home"}
                className="bg-green-600 text-white px-6 py-3 rounded-xl w-60 text-center mb-3 shadow-md">
                Go to Home
            </Link>

            <Link
                href={"/Test/sample"}
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl w-60 text-center mb-3 shadow-md">
                Go to Sample
            </Link>

            <Link
                href={"/(auth)/login"}
                className="bg-teal-600 text-white px-6 py-3 rounded-xl w-60 text-center mb-3 shadow-md">
                Go to Login
            </Link>

            <Link
                href={"/Test"}
                className="bg-green-700 text-white px-6 py-3 rounded-xl w-60 text-center mb-3 shadow-md">
                Go to Test Index
            </Link>

            <Link
                href={"/Test/khb"}
                className="bg-lime-600 text-white px-6 py-3 rounded-xl w-60 text-center mb-6 shadow-md">
                Go to ID Detail
            </Link>

            <Text style={styles.text}>Hello</Text>
            <Text style={styles.text2}>Advance Mobile Development</Text>

            <TextInput
                value={data}
                onChangeText={setData}
                style={styles.input}
                placeholder="Enter something..."
            />

            <TouchableOpacity
                onPress={() => alert("hii❤️😉")}
                className="bg-green-500 px-5 py-2 rounded-xl shadow-md">
                <Text className="text-white font-semibold">Click Me</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        color: 'green',
        fontWeight: 'bold'
    },

      text2: {
        fontSize: 22,
        color: 'brown',
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: 'green',
        width: '80%',
        marginVertical: 20,
        padding: 10,
        borderRadius: 10
    }
})
