import { Button, FlatList, Image, Platform, SafeAreaView, SectionList, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ImageLinks from '../../Utils/ImageLinks'
import { popularCrypto } from '../../Utils/Data'
import ButtonFlatlist from '../../Components/ButtonFlatlist'
import { cryptoData } from '../../Utils/Data'
import ModalCustom from '../../Components/ModalCustom'
import routes from '../../Navigators/constant'

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [filteredData, setFilteredData] = useState(cryptoData)
  const [showmodal, setShowmodal] = useState(false)
  const [countryName, setCountryName] = useState("US")
  const handleSearch = (text: any) => {
    const newFilteredData = cryptoData.map(category => ({
      title: category.title,
      data: category.data.filter(item => item.name.toLowerCase().includes(text?.toLowerCase())),
    }));
    const updateFilterdata = newFilteredData.filter(category => category.data.length > 0);
    setFilteredData(updateFilterdata)
  }
  const handleModal = () => {
    setShowmodal(true)
  }
  const navigateCalculator = (name: string) => {
    navigation.navigate(routes.CALCULATOR, { name: name, countryName: countryName })
  }
  return (
    <>
    <StatusBar
        backgroundColor={'#000000'}
      />
      <SafeAreaView style={{ backgroundColor: '#000000' }} />
      <View style={styles?.mainContainer}>
        <View style={styles?.headerView}>
          <View style={styles?.iconView}>
            <Image source={ImageLinks.back} style={styles?.back} />

          </View>
          <Text style={styles?.headerTextBuy}>Buy</Text>
          <TouchableOpacity style={styles?.lastTextView} onPress={handleModal}>
            <Text style={styles?.headerText}>{countryName}</Text>
            <Image source={ImageLinks.down} style={styles?.search} />

          </TouchableOpacity>

        </View>
        <View style={Platform.OS === 'ios'?styles?.searchView:styles?.searchViewAndroid}>
          <View style={styles?.searchIconView}>
            <Image source={ImageLinks.search} style={styles?.search} />
          </View>
          <TextInput
          placeholderTextColor="#ffffff" 
            onChangeText={handleSearch} style={styles?.searchInput} placeholder="Search crypto" />
        </View>
        <View style={styles?.PopularListView}>
          <Text style={styles?.PopularListText}>Popular crypto</Text>
          <View style={styles?.listView}>
            <FlatList
              data={popularCrypto}
              renderItem={({ item }) => <ButtonFlatlist title={item.title} handleNavigate={() => navigateCalculator(item.title.slice(0, 4))} />}
              keyExtractor={item => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

        </View>
        <View style={Platform.OS === 'ios'? styles?.dataListView :styles?.dataListViewAndroid}>
          <SectionList
            contentContainerStyle={{ gap: 25 }}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
            sections={filteredData}
            keyExtractor={(index) => `${index}`}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles?.cryptoDetailsView} onPress={() => navigateCalculator(item?.name)}>
                <Image source={ImageLinks.coin} style={styles?.coin} />
                <View>
                  <Text style={styles?.dataListName}>{item?.name}</Text>
                  <Text style={styles?.dataListFullname}>{item?.fullname}</Text>
                </View>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles?.dataListHeaderName}>{title}</Text>
            )}
          />
        </View>

        <ModalCustom isVisible={showmodal} setIsVisible={setShowmodal} setCountryName={setCountryName} />
      </View>
    </>

  )
}

export default HomeScreen