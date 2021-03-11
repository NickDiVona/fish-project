import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FISHLIST } from '../shared/fishList';
import FishDetails from './FishDetails';
import CustomButton from './CustomButton';

class FishTank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fishList: FISHLIST,
      tankCapacity: 25
    };
  }

  increaseTankCapacity() {
    this.setState({
      tankCapacity: this.state.tankCapacity + 1
    });
  }

  decreaseTankCapacity() {
    this.setState({
      tankCapacity: this.state.tankCapacity - 1
    });
  }

  renderFish() {
    return this.state.fishList.map((fish) => {
      return (
        <FishDetails
          selectedFish={fish}
          tankCapacity={this.state.tankCapacity}
          key={fish.name + fish.color}
        />
      );
    });
  }

  render() {
    return (
      <View>
        <CustomButton
          onButtonPress={() => this.decreaseTankCapacity()}
          buttonTitle={'Decrease Tank Capacity'}
          bgColor={'lightsalmon'}
        />
        <CustomButton
          onButtonPress={() => this.increaseTankCapacity()}
          buttonTitle={'Increase Tank Capacity'}
          bgColor={'lightseagreen'}
        />

        {this.renderFish()}
      </View>
    );
  }
}

export default FishTank;
