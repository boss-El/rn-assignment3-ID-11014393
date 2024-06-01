// SearchArea.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const SearchArea = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        <View style={styles.innerSearchBox}>
          <View style={styles.searchIconInner}>
            <Feather name="search" size={24} color="black" />
            <Text style={styles.textStyle}>Search</Text>
          </View>
          <View style={styles.rectangle}></View>
        </View>
      </View>
      <View style={styles.filter}>
        <FontAwesome name="sliders" size={20} color="#FFFFFF" style={styles.iconStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: '#FBF9F7',
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    marginRight: 10,
  },
  innerSearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rectangle: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF', // Updated border color to white
    marginLeft: 10,
  },
  textStyle: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 10,
  },
  iconStyle: {
    marginRight: 10,
  },
  filter: {
    width: 50,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0522F',
    borderRadius: 14,
  },
});

export default SearchArea;
