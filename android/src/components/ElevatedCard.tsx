import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.carElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.carElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.carElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.carElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.carElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.carElevated]}>
          <Text style={styles.emoji}>😁</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: { 
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  carElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset:{
      width: 1,
      height: 1,
    },
  },

});

export default ElevatedCard;
