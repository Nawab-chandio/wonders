import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './android/src/components/FlatCards';
import Header from './android/src/components/Header';
import ElevatedCard from './android/src/components/ElevatedCard';
import FancyCard from './android/src/components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header />
          <FlatCards />
          <ElevatedCard />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
