import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const CreateAcount = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfError, setPasswordConfError] = useState('');
    return (
    <View className='flex-1'>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgb(134, 239, 172)', 'rgb(59, 130, 246)']}
        className='flex-1'
        >
        <View className='flex-1 justify-center m-10 space-y-4'>
        <Text className=' text-white text-3xl font-bold self-center'>Créer un compte</Text>
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
        <TextInput
            placeholder='Confirmer mot de passe' 
            secureTextEntry={true} 
            className=' rounded-l-full rounded-r-full bg-white h-12 '
            onChangeText={setPasswordConf}
            value={passwordConf}
            />

        <TouchableOpacity className=' rounded-l-full rounded-r-full bg-sky-400 h-12 '>
            <Text  className=' text-white text-2xl font-bold self-center top-1'>Créer un compte</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text  className=' text-white self-center top-1 font-bold text-lg'>Vous avez déjà un compte ?Connectez-vous</Text>
        </TouchableOpacity>

        </View>
        </LinearGradient>
    </View>
    
);
};

export {CreateAcount};

