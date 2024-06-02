// Categories.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>
      <Text style={styles.categoriesText}>Categories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    // position: 'relative',
    top: 50, // Adjusted top property to reduce the margin at the top
    left: 20,
  },
  categoriesText: {

    width: 96,
    height: 24,
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'left',
    color: '#000000', 
    backgroundColor: 'transparent', 
    opacity: 1,
  },
});

export default Categories;
