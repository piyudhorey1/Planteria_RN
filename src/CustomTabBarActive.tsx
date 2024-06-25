import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomTabIconProps {
  name: string;
  color: string;
  size: number;
  focused: boolean;
  activeColor?: string; // Optional active color prop
}

const CustomTabIcon: React.FC<CustomTabIconProps> = ({ name, color, size, focused, activeColor }) => {
  return (
    <View style={styles.container}>
      {focused && <View style={[styles.highlight, { backgroundColor: activeColor || 'yellow' }]} />}
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
    left: -10,
  },
});

export default CustomTabIcon;
