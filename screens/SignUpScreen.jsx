import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonShared from "../components/shared/ButtonShared";
import firebase from "../firebase";
import { useEffect } from "react";
const db = firebase.firestore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 0,
  },
  input: {
    borderRadius: 30,
    borderWidth: 1,
    marginTop: 10,
    minWidth: 360,
    minHeight: 30,
    padding: 10,
    paddingLeft: 15,
    borderWidth: 0.5,
    borderColor: "#bfbfbf",
  },
  sTitle: {
    color: "#ed3b45",
    fontWeight: "bold",
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
  },
  colText: {
    marginLeft: 20,
    marginTop: "auto",
  },
});

function SignUpScreen(props) {
  const [fname, onChangeFname] = React.useState("");
  const [lname, onChangeLname] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [dataM, setDataM] = React.useState({
    amortissement: 0,
    amount: 0,
    months: 0,
  });
  const [isSelected, setSelection] = React.useState(false);
  let cal;
  async function signUp() {
    try {
      if (db) {
        if (fname === "" || lname === "" || phone === "" || email === "") {
          Alert.alert("Oops", "All fields are required");
        } else {
          db.collection("clients").add({
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
          });
          await AsyncStorage.setItem(
            "client",
            JSON.stringify({ fname, lname, phone, email })
          );
          (amount = 100000), (months = 15), (amortissement = 1022033.12);
          const data = {
            fname,
            lname,
            phone,
            amount: dataM.amount,
            months: dataM.months,
            amortissement: dataM.amortissement,
          };
          // sendMail(email, data);

          props.navigation.navigate("Calcul", {
            data: { fname, lname, phone, email },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  dataM && console.log(dataM.amount, dataM.months, dataM.amortissement);
  useEffect(async () => {
    cal = JSON.parse(await AsyncStorage.getItem("calcul"));
    setDataM(cal);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Image source={require("../assets/coordonnee.jpg")} />
        <View style={styles.colText}>
          <Text style={styles.sTitle}>MES COORDONNÉES</Text>
          <Text>
            Renseigner les champs ci-dessous et passer à l'étape suivante !
          </Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder={"Nom"}
        onChangeText={onChangeFname}
        value={fname}
      />
      <TextInput
        style={styles.input}
        placeholder={"Prénom"}
        onChangeText={onChangeLname}
        value={lname}
      />
      <TextInput
        style={styles.input}
        placeholder={"Tél"}
        onChangeText={onChangePhone}
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder={"Email..."}
        onChangeText={onChangeEmail}
        value={email}
      />
      <Text style={{ margin: 10 }}>
        Conformément à la loi 09-08, vous disposez d'un droit d'accès, de
        rectification et d'opposition au traitement de vos données personnelles.
        Ce traitement a été autorisé par la CNDP sous le n°A-M-158/2020
      </Text>

      <ButtonShared
        text="SIMULER"
        onPress={() => {
          signUp();
        }}
      />
    </ScrollView>
  );
}

export default SignUpScreen;
