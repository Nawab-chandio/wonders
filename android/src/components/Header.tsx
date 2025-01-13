import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  title: string;
  onMenuPress: () => void;
  onProfilePress: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onMenuPress,
  onProfilePress,
}) => {
  return (
    <View style={styles.headerContainer}>
      {/* Menu Button */}
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Text>☠️</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Profile Button */}
      <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
        <Text>☠️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#60b6d0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  menuButton: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 10,
  },
});

export default Header;
