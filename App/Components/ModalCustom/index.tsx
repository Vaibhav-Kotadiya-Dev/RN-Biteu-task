import { Image, Modal, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Countries } from '../../Utils/Data'
import styles from './style'
import ImageLinks from '../../Utils/ImageLinks'

const ModalCustom = ({ isVisible, setIsVisible, setCountryName }: { isVisible?: boolean, setIsVisible?: any, setCountryName?: any }) => {
  const [filteredData, setFilteredData] = useState(Countries)
  const handleSearch = (text: any) => {
    const data = Countries?.filter(item => item?.includes(text))
    setFilteredData(data)
  }
  const handleName = (name: string) => {
    setCountryName(name)
    setIsVisible(false)
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      >
        <View style={styles?.modalContainer}>

          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={{ height: '27%' }}>
            <Text />
          </TouchableOpacity>
          <View style={styles?.modalContentView}>
            <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center' }}>
              <View style={{ borderRadius: 5, height: 3, backgroundColor: 'gray', width: 40, marginTop: 15, marginBottom: -30 }} />
            </View>
            <View style={Platform.OS === 'ios'?styles?.searchView:styles?.searchViewAndroid}>
              <View style={styles?.searchIconView}>
                <Image source={ImageLinks.search} style={styles?.search} />
              </View>
              <TextInput
              placeholderTextColor="#ffffff"
                onChangeText={handleSearch} style={styles?.searchInput} placeholder="Search country" />
            </View>
            <View style={styles?.allView}>
              <Text style={styles?.allText}>All</Text>
            </View>
            <View style={styles?.modalDataDiv}>
              <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
              >
                {
                  filteredData?.map((item, i) => <TouchableOpacity key={i} style={styles?.imgNameDiv} onPress={() => handleName(item?.toUpperCase()?.slice(0, 3))}>
                    <Image source={ImageLinks.coin} style={styles?.coin} />
                    <Text style={styles?.countryName}>{item}</Text>
                  </TouchableOpacity>)
                }
              </ScrollView>
            </View>

          </View>
        </View>

      </Modal>

    </>
  )
}

export default ModalCustom

