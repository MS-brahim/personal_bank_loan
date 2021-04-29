import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import TextBoldShared from "../components/shared/TextBoldShared";
import ButtonShared from "../components/shared/ButtonShared";
import AsyncStorage from "@react-native-async-storage/async-storage";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    marginTop: 60,
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
    backgroundColor: "white",
  },
});

const ValidationScreen = () => {
  return (
    <View style={styles.container}>
      <TextBoldShared text="VÉRIFICATION DE VOTRE IDENTITÉ" />
      <Text>Vous allez recevoir un code de validation par mail</Text>
      <TextInput style={styles.input} placeholder={"CODE VALIDATION"} />
      <ButtonShared text="VALIDER ET CONTUNIE" onPress={() => {}} />
      <Text>Renvoyer le message</Text>
    </View>
  );
};

export default ValidationScreen;
