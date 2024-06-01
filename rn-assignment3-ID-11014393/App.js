// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Nav from './Nav';
import SearchArea from './SearchArea';
import Categories from './Categories';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Nav />
        <SearchArea />
        <Categories />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});
