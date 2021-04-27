import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, CheckBox, Image } from 'react-native';

import ButtonShared from '../components/shared/ButtonShared';
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth:370,
    },
    input :{
        borderRadius:30,
        borderWidth:1,
        marginTop:10,
        minWidth:360,
        minHeight:30,
        padding:10,
        paddingLeft:15,
    },
    sTitle :{
        color: "#ed3b45",
        fontWeight:"bold",
        fontSize:20
    },
    row: {
        flexDirection: "row",
    },
    colText: {
        marginLeft:20,
        marginTop:'auto'
    },
});
 
function SignUpScreen() {

    const [fname, onChangeFname] = React.useState(""); 
    const [lname, onChangeLname] = React.useState("");
    const [phone, onChangePhone] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [isSelected, setSelection] = React.useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
                <Image source={require('../assets/coordonnee.jpg')} />
                <View style={styles.colText}>
                    <Text style={styles.sTitle}>MES COORDONNÉES</Text>
                    <Text>Renseigner les champs ci-dessous et passer à l'étape suivante !</Text>
                </View>
            </View>
            <TextInput
                style={styles.input}
                placeholder={'Nom'}
                onChangeText={onChangeFname}
                value={fname}
            />
            <TextInput
                style={styles.input}
                placeholder={'Prénom'}
                onChangeText={onChangeLname}
                value={lname}
            />
            <TextInput
                style={styles.input}
                placeholder={'Tél'}
                onChangeText={onChangePhone}
                value={phone}
            />
            <TextInput
                style={styles.input}
                placeholder={'Email...'}
                onChangeText={onChangeEmail}
                value={email}
            />
            <Text>
                Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles. Ce traitement a été autorisé par la CNDP sous le n°A-M-158/2020
            </Text>
            {/* <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.label}>Do you like React Native?</Text>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
            />
            <Text style={styles.label}>J'ACCEPTE DE RECEVOIR LES OFFRES PROMOTIONNELLES D'EQDOM</Text> */}

            <ButtonShared text="SIMULER"/>
        </ScrollView>
    );
}
 
export default SignUpScreen;