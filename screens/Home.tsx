import React, { useState, useEffect } from 'react';
import { Text, View, Modal } from 'react-native';
import { Login } from './Login';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({route,navigation}) => {
    
    //fonction pour Vérifier si l'utilisateur s'est connecté auparavant
    const verifierConnexion = async () => {
        try {
            //On récupère dans la mémoire du téléphone un objet(l'objet est une chaine de caractère) 
            //dont la clé est 'connected?'
            const value = await AsyncStorage.getItem('connected?');
            //Si la clé exite : on met à jour la variable 'connected' booléenne indiquant si l'utilisateur est connecté ou pas
            //sinon on affiche une erreur s'il y en a
            if (value !== null) {
                setConnected(JSON.parse(value))
                }
            } catch (e) {
                console.log(e);
            }
            //si 'connected' est égal à true on met à jour la varible affichant la modale à false
            //C'est à dire qu'on affiche pas la modale
            //sinon on vérifie que l'utilisateur ne vient pas de se connecter
            //et on affiche la modale ou pas en fonction
            if ( connected ) {
                    setModalVisible(false);
            }
            else {
                    setConnected(route?.params?.param?route?.params?.param:false);
                    connected?setModalVisible(true):'';
            }
    };

    //fonction pour Enregistrer dans le cache que l'utilisateur est connecté ou pas
    const storeStatutConnexion = async () => {
        try {
            await AsyncStorage.setItem("connected?", connected.toString());
            } catch (e) {
                console.log(e);
            }
    }

    // state: variable qui passe à true ou false
    //selon si on souhaite afficher une modale ou pas
    const [modalVisible, setModalVisible] = useState(true); 
    // state: variable qui passe à true ou false
    //selon si l'utilisateur est connecté ou pas
    const [connected, setConnected] = useState(false);

    //appel de la fonction : 
    //On vérifie si l'utilisateur est connecté puis on décide d'afficher la madale ou pas
    verifierConnexion()
    return (
        <View className='flex-1 '>
            <Modal
            visible={modalVisible}
            className='flex-1 '
            >
                <Login navigation={navigation} setModalVisible={setModalVisible}></Login>
            </Modal>
        <View className='flex-1'>
            <View className='flex-1 justify-center items-center'>
            <Text>hey, it's home</Text>
            </View>
        </View>
        
    </View>
    )
}

export {Home};

