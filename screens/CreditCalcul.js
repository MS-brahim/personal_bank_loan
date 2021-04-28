import React from "react";
import { StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image  
  } from "react-native";
import Slider from "@react-native-community/slider";
import ButtonShared from "../components/shared/ButtonShared";

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
      {/* <ImageBackground source={require('../assets/bg.jpg')} style={{width: '100%', height: '100%'}}> */}
        <View style={styles.container}>
          <View style={styles.slider}>
            <Text style={{ color: this.colors.white }}>{this.min}</Text>

            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={this.min}
              maximumValue={this.max}
              minimumTrackTintColor="red"
              maximumTrackTintColor="#000000"
              onValueChange={(amount) => {
                this.setState({ amount });
              }}
            />
            <Text style={{ color: this.colors.white }}> {this.max}</Text>
          </View>
          {/* <Text>Montant du crédit : {this.state.amount}</Text> */}

          <View style={styles.slider}>
            <Text style={{ color: this.colors.white }}>{this.minMonths}</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={this.minMonths}
              maximumValue={this.maxMonths}
              minimumTrackTintColor="red"
              maximumTrackTintColor="#000000"
              onValueChange={(months) =>
                this.setState({ months: Math.trunc(months) })
              }
            />
            <Text style={{ color: this.colors.white }}> {this.maxMonths}</Text>
          </View>

          {/* <Text>Durée du crédit : {this.state.months}</Text> */}

          
          <Text style={{
            marginTop:30,
          }}>Détail de la simulation</Text>
          <Text style={{
            fontWeight:'bold',
            fontSize:30,
            color:'#ed3b45',
          }}>Crédit personnel</Text>
          
          
          
          <View style={styles.row}>
            <View style={styles.col1}>
              <Text><Image source={require("../assets/icon1.png")} style={styles.colIcon}/> Montant du crédit </Text>
              <Text style={styles.sm_detail}>{this.state.amount} DHS</Text>
              <Text><Image source={require("../assets/icon3.png")} style={styles.colIcon}/> Assurance mensuelle</Text>
              <Text style={styles.sm_detail}>0.71 DHS</Text>
              <Text><Image source={require("../assets/icon6.png")} style={styles.colIcon}/> T.E.G</Text>
              <Text style={styles.sm_detail}>8.5 %</Text>
            </View>
            <View style={styles.col2}>
              <Text><Image source={require("../assets/icon2.png")} style={styles.colIcon}/> Durée du crédit</Text>
              <Text style={styles.sm_detail}>{this.state.months} MOIS</Text>
              <Text><Image source={require("../assets/icon4.png")} style={styles.colIcon}/> Frais de dossier</Text>
              <Text style={styles.sm_detail}>0 DHS</Text>
              <Text><Image source={require("../assets/icon5.png")} style={styles.colIcon}/> Cout global du crédit</Text>
              <Text style={styles.sm_detail}>
                {this.state.amount && this.state.months && (
                  <Text>
                    {this.calcAmortissment(this.state.amount, this.state.months)}
                  </Text>
                )} DHS 
              </Text>
            </View>
          </View>
          
        </View>
        {/* </ImageBackground> */}
        <View style={{backgroundColor:'white', padding:20, flexDirection:'row', flexWrap:'wrap'}}>
          <Image source={require("../assets/icon1.png")} style={{width:'10%'}}/>
          <View style={{width:'60%', paddingLeft:8}}>
            <Text>Mensualité du crédit</Text>
            <Text style={{
              color:'red',
              fontWeight:'bold',
              fontSize:20,
            }}>
              {this.state.amount && this.state.months && (
                <Text>
                  {this.calcAmortissment(this.state.amount, this.state.months)}
                </Text>
              )}
            </Text>
            <Text>(Hors assurance)</Text>
          </View>
          <Text style={{width:'15%'}}>Share</Text>
          <Text style={{width:'15%'}}>Imp</Text>
        </View>
        <ButtonShared text='DEMANDER CE PRET'/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    color: "white",
    borderRadius: 20,
    marginTop: 10,
  },
  slider: {
    backgroundColor: "#404040",
    padding: 10,
    flexDirection: "row",
    borderRadius: 22,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  row: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  col1:{
    width:'50%'
  },
  colIcon:{
    margin:2,
  },
  sm_detail:{
    color: 'red',
    fontWeight:'bold',
    paddingLeft:30
  }
});
