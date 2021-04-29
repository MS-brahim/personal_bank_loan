import React from 'react';
import { View, Text, StyleSheet,
    Image, TextInput, ScrollView
    } from 'react-native';
import TextBoldShared from "../components/shared/TextBoldShared";
import ButtonShared from "../components/shared/ButtonShared";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    colInfo:{
        borderWidth:0.2,
        padding:25
    },
    textInfo :{
        marginLeft:30,
        fontWeight:'bold',
        fontSize:16
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
        backgroundColor:'white'
    },
});
 
const CheckInfoScreen = () => {
    const [fname, onChangeFname] = React.useState("");
    const [lname, onChangeLname] = React.useState("");
    const [phone, onChangePhone] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    return (
        <ScrollView style={styles.container}>
            <View style={{borderWidth:0.2, paddingLeft:40, paddingRight:40, backgroundColor:'white'}}>
                <View style={styles.colInfo}>
                    <Text><Image source={require("../assets/icon1.png")} /> Montant du crédit </Text>
                    <Text style={styles.textInfo}>223 DHS</Text>
                </View>
                <View style={styles.colInfo}>
                    <Text><Image source={require("../assets/icon1.png")} /> Montant du crédit </Text>
                    <Text style={styles.textInfo}>21 MOIS</Text>
                </View>
                <View style={styles.colInfo}>
                    <Text><Image source={require("../assets/icon1.png")} /> Montant du crédit </Text>
                    <Text style={styles.textInfo}>33333 DHS</Text>
                </View>
            </View>
            <View style={{alignItems:'center', marginTop:10}}>
                <Image source={require("../assets/icon1.png")} />
                <TextBoldShared text='VALIDATION MES COORDONNÉES'/>
                <Text>okokoko</Text>
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
                <ButtonShared
                    text="ALLONS-Y"
                    onPress={() =>this.props.navigation.navigate('ValidationScreen')}
                />
            </View>
        </ScrollView>
    );
}

 
export default CheckInfoScreen;