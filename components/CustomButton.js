import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onButtonPress, bgColor, buttonTitle }) => {
  const { buttonViewStyle, buttonTextStyle } = styles;

  return (
    <TouchableOpacity onPress={onButtonPress}>
      <View style={[buttonViewStyle, { backgroundColor: bgColor }]}>
        <Text style={buttonTextStyle}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonViewStyle: {
    margin: 10,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyle: {
    color: 'white'
  }
});
