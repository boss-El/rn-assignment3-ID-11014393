// CategoriesItems.js
import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const categories = [
  {
    id: 1,
    upperText: 'Exercise',
    lowerText: '12 Tasks',
    image: require('./assets/CategoriesAvatar2.png'),
  },
  {
    id: 2,
    upperText: 'Study',
    lowerText: '8 Tasks',
    image: require('./assets/CategoriesAvatar.png'),
  },
  {
    id: 3,
    upperText: 'Code',
    lowerText: '15 Tasks',
    image: require('./assets/CategoriesAvatar2.png'),
  },
  {
    id: 4,
    upperText: 'Cook',
    lowerText: '5 Tasks',
    image: require('./assets/CategoriesAvatar.png'),
  },
  {
    id: 5,
    upperText: 'Read',
    lowerText: '7 Tasks',
    image: require('./assets/CategoriesAvatar2.png'),
  },
  {
    id: 6,
    upperText: 'Shop',
    lowerText: '9 Tasks',
    image: require('./assets/CategoriesAvatar.png'),
  },
  {
    id: 7,
    upperText: 'Clean',
    lowerText: '6 Tasks',
    image: require('./assets/CategoriesAvatar2.png'),
  },
  {
    id: 8,
    upperText: 'Relax',
    lowerText: '3 Tasks',
    image: require('./assets/CategoriesAvatar2.png'),
  },
];

const CategoriesItems = () => {
  const renderRightActions = () => (
    <View style={styles.rightAction}>
      <Text style={styles.actionText}>Delete</Text>
    </View>
  );

  return (
    <ScrollView horizontal style={styles.scrollContainer}>
      {categories.map((category) => (
        <Swipeable key={category.id} renderRightActions={renderRightActions}>
          <View style={styles.categoriesCard}>
            <View style={styles.rectangle} />
            <View style={styles.text}>
              <Text style={styles.upperText}>{category.upperText}</Text>
              <Text style={styles.lowerText}>{category.lowerText}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={category.image} style={styles.image} />
            </View>
          </View>
        </Swipeable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoriesCard: {
    width: 186,
    height: 192,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
  },
  text: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  upperText: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19.2,
    color: '#000000',
  },
  lowerText: {
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: '#000000',
    marginTop: 5,
  },
  imageContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rightAction: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default CategoriesItems;
