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
    <View style={styles.container}>
      <SafeAreaView style={styles.view}>
        <Text style={styles.auth}>Espace connection</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre email"
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
          />
        </View>
        <Button onPress={handleLogin} title="Se connecter"></Button>

        <Text style={styles.createaccount}>Vous n'avez pas de compte ?</Text>
        <Button
          onPress={() => props.changeStatus("signup")}
          title="S'inscrire"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    height: "100%",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
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
