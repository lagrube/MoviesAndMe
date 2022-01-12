import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const CreateAccount = () => {

    const [Newemail,setNewEmail]=useState(null);
    const [newPwd, setNewPwd]=useState(false);
    const [NewPseudo, setNewPseudo]=useState(null);

    const styles=StyleSheet.create({
        content:{
            justifyContent: 'center',
            backgroundColor: '#000000',
            height: '100%',
        },
        input:{
            backgroundColor:'white',
        },
        text:{
            textAlign: 'center',
            fontSize:20,    
            color:'white',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textAlignVertical: 'center',
            alignContent: 'center',
        }
    })

    function CreateNewAccount(){
        const infoUserToCreate = {
            pseudo:NewPseudo,
            email:Newemail,
            password:newPwd
        }
        axios.post('http://10.50.33.72:5000/api/user/signup',infoUserToCreate).then((res)=>{
            console.log(res.data.message)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <View style={styles.content}>
            <Text style={styles.text}>
                Votre adresse email
            </Text>
            <View style={styles.input}>
                 <TextInput
                    placeholder="Entrez votre email"
                    onChangeText={text => setNewEmail(text)}
                    defaultValue={Newemail}
                />
                 <TextInput
                    placeholder="Entrez votre pseudo"
                    onChangeText={text => setNewPseudo(text)}
                    defaultValue={NewPseudo}
                />
                <TextInput
                    placeholder="Entrez votre mot de passe"
                    onChangeText={text => setNewPwd(text)}
                    defaultValue={newPwd}
                />
            </View>
           
            <Button
                onPress={CreateNewAccount}
                title="Crée mon compte"
                color='green'
            >

            </Button>
        </View>
    );
};

export default CreateAccount;