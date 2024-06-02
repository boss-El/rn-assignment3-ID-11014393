import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const Card = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const Ongoing = () => {
  const titles = [
    'Web Development',
    'Exercise',
    'Study for Exams',
    'Grocery Shopping',
    'House Cleaning',
    'Project Management',
    'Content Writing',
    'Graphic Design',
    'Online Course',
    'Yoga Practice',
    'Book Reading',
    'Gardening',
    'Meal Preparation',
    'Client Meetings',
    'Email Management'
  ];

  return (
    <View style={styles.maincontainer}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        contentOffset={{ y: 2000 }} 
      >
        <View style={styles.container}>
          <Text style={styles.ongoingText}>Ongoing Task</Text>
          {titles.map((title, index) => (
            <Card key={index} title={title} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    paddingLeft: 20,
    paddingTop: 20,
    alignItems: 'flex-start', 
  },
  ongoingText: {
    width: 120,
    height: 24,
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'left',
    color: '#000000',
    backgroundColor: 'transparent',
  },
  card: {
    width: 354,
    height: 128,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8D1BA',
    backgroundColor: '#FBF9F7',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    paddingLeft: 10, 
    paddingTop: 10, 
  },
  text: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'left', 
  },
});

export default Ongoing;
