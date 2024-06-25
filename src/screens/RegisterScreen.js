import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const RegisterScreen = ({navigation}) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
      <Button title="Go to home screen" onPress={() => navigation.navigate("Main")}/>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})