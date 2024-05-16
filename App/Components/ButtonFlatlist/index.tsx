import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'

const ButtonFlatlist = ({title,handleNavigate}:{title:string,handleNavigate?:any}) => {
  return (
    <TouchableOpacity style={styles?.btnView} onPress={handleNavigate}>
      <Text style={styles?.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonFlatlist