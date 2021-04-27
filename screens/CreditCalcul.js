import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
export default class CreditCalcul extends React.Component {
  min = 4000;
  max = 500000;

  minMonths = 12;
  maxMonths = 84;

  minMonthlyPayment = 2000;
  maxMonthlyPayment = 2000;

  colors = {
    white: "white",
  };

  state = {
    amount: this.min,
    months: this.minMonths,
  };

  calcAmortissment(mt, mois) {
    mois = this.state.months;
    mt = this.state.amount;
    const a = parseFloat(mt / mois);
    const frais = parseFloat((0.71 * mois * 50) / mois);
    var interGloble = parseFloat((mt * mois * 20) / 1200);
    var iParMois = parseFloat(interGloble / mois);
    var Amortissement = parseFloat((a + iParMois + frais).toFixed(2));
    return Amortissement;
  }

  render() {
    return (
      <ScrollView style={styles.title}>
        <View>
          <Text style={{ fontSize: 24, color: "white" }}>Calcul</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.slider}>
            <Text style={{ color: this.colors.white }}>{this.min}</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={this.min}
              maximumValue={this.max}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={(amount) => {
                this.setState({ amount });
              }}
            />
            <Text style={{ color: this.colors.white }}> {this.max}</Text>
          </View>
          <Text>Amount : {this.state.amount}</Text>

          <View style={styles.slider}>
            <Text style={{ color: this.colors.white }}>{this.minMonths}</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={this.minMonths}
              maximumValue={this.maxMonths}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={(months) =>
                this.setState({ months: Math.trunc(months) })
              }
            />
            <Text style={{ color: this.colors.white }}> {this.maxMonths}</Text>
          </View>

          <Text>Months : {this.state.months}</Text>

          {this.state.amount && this.state.months && (
            <Text>
              {this.calcAmortissment(this.state.amount, this.state.months)}
            </Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    color: "white",
    backgroundColor: "rgba(52, 52, 52, 0.7)",
    borderRadius: 20,
    marginTop: 10,
  },
  slider: {
    backgroundColor: "rgb(238, 59, 69)",
    padding: 10,
    flexDirection: "row",
    borderRadius: 22,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  title: {},
});
