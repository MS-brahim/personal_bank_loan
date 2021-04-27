import React from "react";
import Slider from "react-native-sliders";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

export default class CreditCalcul extends React.Component {
  state = {
    value: 100,
  };

  render() {
    return (
      <View>
        <View
          style={{ backgroundColor: "red", padding: 20, flexDirection: "row" }}
        >
          <Slider
            style={{ width: 250, height: 40 }}
            value={this.state.value}
            onValueChange={(value) => this.setState({ value })}
          />
          <Text style={{ alignItems: "center", justifyContent: "center" }}>
            Value: {(this.state.value).toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
