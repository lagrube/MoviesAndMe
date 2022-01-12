import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    const infosUser = {
      password: password,
      email: email,
    };
    axios
      .post("http://172.20.10.2:5000/api/user/login", infosUser)
      .then((res) => {
        console.log(res.data);
        props.changeStatus("home");
      })
      .catch((err) => {
        console.log(err);
        setPassword(null);
        setEmail(null);
      });
  };

  return (
    <View>
      <SafeAreaView style={styles.view}>
        <Text style={styles.auth}>Veuillez vous authentifiez</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Entrez votre email"
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
          />
          <TextInput
            placeholder="Entrez votre mot de passe"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
          />
        </View>
        <Button onPress={handleLogin} title="Se connecter"></Button>

        <Text style={styles.createaccount}>
          Vous n'avez pas de compte ? Créez-en un en cliquant
        </Text>
        <Button
          onPress={() => props.changeStatus("signup")}
          title="S'inscrire"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    height: "100%",
  },
  auth: {
    textAlign: "center",
    fontSize: 28,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  input: {
    // backgroundColor: "grey",
    display: "flex",
  },
  createaccount: {
    // color: "white",
    paddingTop: 34,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
});

export default Login;
