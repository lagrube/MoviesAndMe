import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Signup = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pseudo, setPseudo] = useState();

  function CreateNewAccount() {
    const infoUserToCreate = {
      pseudo,
      email,
      password,
    };
    axios
      .post("http://172.20.10.2:5000/api/user/signup", infoUserToCreate)
      .then(() => {
        props.changeStatus("home");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.text}>Votre adresse email</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Entrez votre email"
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
          />
          <TextInput
            placeholder="Entrez votre pseudo"
            onChangeText={(text) => setPseudo(text)}
            defaultValue={pseudo}
          />
          <TextInput
            placeholder="Entrez votre mot de passe"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
          />
        </View>

        <Button
          onPress={CreateNewAccount}
          title="Créer mon compte"
          color="green"
        />
        <Button
          onPress={() => props.changeStatus("login")}
          title="Retour"
          color="green"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    backgroundColor: "#000000",
    height: "100%",
  },
  input: {
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
});

export default Signup;
