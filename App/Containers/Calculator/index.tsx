import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ImageLinks from '../../Utils/ImageLinks'
let numberArray: any[] = []
const Calculator = ({ navigation, route }: { navigation: any, route: any }) => {
  const [numberVlue, setNumberValue] = useState(numberArray)
  const name = route?.params?.name;
  const countryName = route?.params?.countryName;
  const handleBack = () => {
    navigation.goBack()
    numberArray = []
  }
  const addValue = () => {
    setNumberValue([...numberArray])
  }
  const handleNumber = (value: number) => {
    if (numberArray.length < 15) {
      if (value === 10) {
        numberArray.push('.')
      } else if (value === 12) {
        numberArray.pop()

      } else {
        numberArray.push(value)
      }
    }else{
      if (value === 12) {
        numberArray.pop()
      }
    }
    addValue()
  }
  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#000000' }} />
      <View style={styles?.calculatorContainer}>
        <View style={styles?.headerView}>
          <TouchableOpacity style={styles?.iconView} onPress={handleBack}>
            <Image source={ImageLinks.back} style={styles?.back} />
          </TouchableOpacity>
          <Text style={styles?.headerTextBuy}>Buy {name}</Text>
        </View>
        <View style={styles?.calculatorSubContainer}>
          <View style={styles?.firstView}>
            <View style={styles?.firstSubView}>
              <View style={styles?.exchangeView}>
                <Image source={ImageLinks.upDown} style={styles?.upDown} />
                <Text style={styles?.countyCoinText}>{name}</Text>
              </View>
              <View style={styles?.countyNameView}>
                <View style={styles?.inputNumView}>
                  {
                   numberVlue?.length > 0 ? numberVlue?.map((num, i) => <Text style={styles?.inputNum} key={i}>{num}</Text>):<Text style={styles?.inputNum}>0</Text>
                  }
                </View>
                <Text style={styles?.countyNameText}>{countryName}</Text>
              </View>
            </View>
          </View>
          <View style={styles?.numberMainView}>
            <View style={styles?.numberSubView}>
              <TouchableOpacity onPress={() => handleNumber(1)}><Text style={styles?.number}>1</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(4)}><Text style={styles?.number}>4</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(7)}><Text style={styles?.number}>7</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(10)}><Text style={styles?.numberDot}>.</Text></TouchableOpacity>


            </View>
            <View style={styles?.numberSubView}>
              <TouchableOpacity onPress={() => handleNumber(2)}><Text style={styles?.number}>2</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(5)}><Text style={styles?.number}>5</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(8)}><Text style={styles?.number}>8</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(0)}><Text style={styles?.number}>0</Text></TouchableOpacity>


            </View>
            <View style={styles?.numberSubView}>
              <TouchableOpacity onPress={() => handleNumber(3)}><Text style={styles?.number}>3</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(6)}><Text style={styles?.number}>6</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(9)}><Text style={styles?.number}>9</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handleNumber(12)}><Image source={ImageLinks.cross} style={styles?.cross} /></TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default Calculator

