import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';

const FancyCard = () => {
  const wonders = [
    {
      title: 'Taj Mahal',
      description:
        'The Taj Mahal is an iconic symbol of love, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage Site and one of the most beautiful structures in the world.',
      city: 'Agra, India',
      visitingTime: 'Sunrise to Sunset',
      image: require('../../assets/taj-mahal.jpg'),
    },
    {
      title: 'Great Wall of China',
      description:
        'The Great Wall of China is a series of fortifications built to protect China from invasions. It stretches over 13,000 miles and is one of the most remarkable feats of engineering.',
      city: 'Beijing, China',
      visitingTime: '8:00 AM to 5:00 PM',
      image: require('../../assets/china-wall.jpg'),
    },
    {
      title: 'Christ the Redeemer',
      description:
        'Christ the Redeemer is a massive statue of Jesus Christ located in Rio de Janeiro, Brazil. It stands atop Mount Corcovado and is a symbol of peace and Christianity.',
      city: 'Rio de Janeiro, Brazil',
      visitingTime: '8:00 AM to 7:00 PM',
      image: require('../../assets/Christ-the-Redeemer.jpg'),
    },
    {
      title: 'Machu Picchu',
      description:
        'Machu Picchu is an ancient Incan city set high in the Andes Mountains in Peru. Known for its sophisticated dry-stone construction, it is a UNESCO World Heritage Site.',
      city: 'Cusco Region, Peru',
      visitingTime: '6:00 AM to 5:30 PM',
      image: require('../../assets/Machu-Picchu.jpg'),
    },
    {
      title: 'Colosseum',
      description:
        'The Colosseum in Rome, Italy, is an ancient amphitheater that hosted gladiatorial contests and public spectacles. It remains an iconic symbol of Roman engineering.',
      city: 'Rome, Italy',
      visitingTime: '9:00 AM to 7:00 PM',
      image: require('../../assets/Colosseo.jpg'),
    },
    {
      title: 'Petra',
      description:
        'Petra, known as the "Rose City," is an archaeological site in Jordan famous for its rock-cut architecture and water conduit system. It is a UNESCO World Heritage Site.',
      city: 'Ma’an, Jordan',
      visitingTime: '6:00 AM to 6:00 PM',
      image: require('../../assets/Petra.jpg'),
    },
    {
      title: 'Chichen Itza',
      description:
        'Chichen Itza is a large pre-Columbian archaeological site located in Mexico. It features the famous step pyramid "El Castillo" and is a UNESCO World Heritage Site.',
      city: 'Yucatan, Mexico',
      visitingTime: '8:00 AM to 5:00 PM',
      image: require('../../assets/Chichen.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingText}>Wonders of the World</Text>
      {wonders.map((wonder, index) => (
        <View key={index} style={[styles.card, styles.cardElevated]}>
          <Image source={wonder.image} style={styles.cardImage} />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{wonder.title}</Text>
            <Text style={styles.cardLabel}>{wonder.city}</Text>
            <Text style={styles.cardDescription}>{wonder.description}</Text>
            <Text style={styles.cardFooter}>
              Visit Time: {wonder.visitingTime}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginVertical: 10,
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // iOS shadow properties
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardElevated: {
    // Additional styling for elevation if needed
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  cardFooter: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888',
    textAlign: 'right',
  },
});
