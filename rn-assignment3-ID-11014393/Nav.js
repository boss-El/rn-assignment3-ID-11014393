// Nav.js
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Nav = () => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.navText}>
        <View style={styles.upperTitle}>
          <Text style={styles.upperTitleText}>
            Hello, Devs
          </Text>
        </View>
        <View style={styles.lowerTitle}>
          <Text style={styles.lowerTitleText}>
            14 tasks today
          </Text>
        </View>
      </View>
      <View style={styles.navImageContainer}>
        <Image source={require('./assets/avatar.png')} style={styles.navImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    height: 52,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  navText: {
    flexDirection: 'column',
  },
  upperTitle: {
    height: 37,
  },
  upperTitleText: {
    fontFamily: 'Lato',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38.4,
    textAlign: 'left',
    color: '#000000',
  },
  lowerTitle: {
    height: 15,
  },
  lowerTitleText: {
    fontFamily: 'Lato',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.4,
    textAlign: 'left',
  },
  navImageContainer: {
    width: 52,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Nav;
