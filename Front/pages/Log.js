import axios from 'axios';
import React, { useState } from 'react';
import {Text, View, StyleSheet, SafeAreaView, Button, TextInput} from "react-native";
import Search from '../components/Search';
import CreateAccount from '../components/CreateAccount';
import Header from './Header';

const Log = () => {
    const [isConnected,setisConnected]=useState(false);
    const [userToken, setUserToken]=useState(null);
    const [email, setEmail]=useState(null);
    const [pwd, setPwd]=useState(null);
    const [wantToCreateAccount, setCreateAccount]=useState(false);

    const styles = StyleSheet.create({
        view:{
            justifyContent: 'center',
            backgroundColor: '#000000',
            height: '90%',
        },
        auth:{
            textAlign: 'center',
            color: 'yellow',
            fontSize:20,    
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
        },
        input:{
            backgroundColor:'white',
        },
        createaccount:{
            color:'white',
            paddingTop:34,
            textAlign: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
        }
    })

    function ConnectMe(){
        const infosUser = {
            password:pwd,
            email:email
        }
        axios.post('http://10.50.33.72:5000/api/user/login',infosUser).then((res)=>{
            console.log(res.data)
            setisConnected(true);
            setUserToken(res.data.token);
            setPwd(null);
            setEmail(null);
        })
        .catch((err)=>{
            console.log(pwd,email)
            console.log(err)
            setPwd(null);
            setEmail(null);
        })
    }

    return (
        <View>
            <Header setisConnected={setisConnected} isConnected={isConnected}/>
            {
                wantToCreateAccount ? 
                    <CreateAccount setCreateAccount={setCreateAccount} setisConnected={setisConnected} />
                :
                <View>
                {
                    isConnected ?
                        <Search/>
                    :
                        <SafeAreaView style={styles.view}>
                            <Text style={styles.auth}>
                                Veuillez vous authentifiez
                            </Text>
                            <View style={styles.input}>
                                 <TextInput
                                    placeholder="Entrez votre email"
                                    onChangeText={text => setEmail(text)}
                                    defaultValue={email}
                                />
                                <TextInput
                                    placeholder="Entrez votre mot de passe"
                                    onChangeText={text => setPwd(text)}
                                    defaultValue={pwd}
                                />
                            </View>
                           
                            <Button 
                                onPress={ConnectMe}
                                title="Se connecter"
                                color="red"
                                >
                            </Button>
                            <Text style={styles.createaccount}>
                                Vous n'avez pas de compte ? Créez-en un en cliquant 
                            </Text>
                            <Button 
                                onPress={()=>setCreateAccount(true)}
                                title="S'inscrire"
                                color="purple"
                            >
                            </Button>
                        </SafeAreaView>
                        
                }
                </View>
            }
        </View>
    );
};

export default Log;