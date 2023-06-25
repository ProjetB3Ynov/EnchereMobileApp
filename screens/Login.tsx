import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { testApi } from '../API';



const Login = ({navigation,setModalVisible}) => {
  console.log(testApi());

  //fonction pour Enregistrer dans le cache que l'utilisateur est connecté ou pas
  const storeConnexion = async (connected) => {
    try {
        await AsyncStorage.setItem("connected?", connected.toString());
        } catch (e) {
            console.log(e);
        }
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validConnexion = () => {
    return true
  }

  

  return (
    <View className='flex-1'>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(134, 239, 172)', 'rgb(59, 130, 246)']}
        className='flex-1'
      >
        <View className='flex-1 justify-center m-10 space-y-4'>
        <Text className=' text-white text-3xl font-bold self-center'>Connexion</Text>

        <TextInput  
          placeholder='Email' 
          className=' rounded-l-full rounded-r-full bg-white h-12'
          onChangeText={setEmail}
          value={email}
          />
        <TextInput  
          placeholder='Mot de passe' 
          secureTextEntry={true} 
          className=' rounded-l-full rounded-r-full bg-white h-12 '
          onChangeText={setPassword}
          value={password}
          />
        <>
        <TouchableOpacity 
          className=' rounded-l-full rounded-r-full bg-sky-400 h-12 '
          onPress={ () => { if (validConnexion()) {
            storeConnexion(true)
            setModalVisible?setModalVisible(false):navigation.navigate('Home',{param:true})
          }}}>
          <Text  className=' text-white text-2xl font-bold self-center top-1'>Se Connecter</Text>
        </TouchableOpacity>
        <Text  className=' text-red-600 text-2xl font-bold self-center top-1'>
          L'adresse mail ou le mot de passe est invalide, veuillez réessayer
        </Text>
        </>
        

        <TouchableOpacity >
          <Text  className=' text-white self-center top-1'>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text  className=' text-white self-center top-1 font-bold text-lg'>Vous n'avez pas de compte ?Créez-en</Text>
        </TouchableOpacity>

        </View>
      </LinearGradient>
    </View>
    

    
  );
};

export {Login};

