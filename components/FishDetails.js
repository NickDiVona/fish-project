import React from 'react';
import { View, Text } from 'react-native';

const FishDetails = ({ selectedFish, tankCapacity }) => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 24 }}>{selectedFish.name}</Text>
      <View>
        <Text>Color: {selectedFish.color}</Text>
        <Text>Size: {selectedFish.size}</Text>
        <Text>
          Fish is stored in a tank a capacity of {tankCapacity} amount of fish.
        </Text>
      </View>
    </View>
  );
};

export default FishDetails;
