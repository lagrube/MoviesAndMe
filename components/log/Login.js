import React from "react";

const Login = () => {
  return (
    <View>
      <SafeAreaView style={styles.view}>
        <Text style={styles.auth}>Veuillez vous authentifiez</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Entrez votre email"
            type="text"
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
          />
          <TextInput
            placeholder="Entrez votre mot de passe"
            type="password"
            onChangeText={(password) => setPwd(password)}
            defaultValue={pwd}
          />
        </View>
        <Button onPress={ConnectMe} title="Se connecter" color="red" />
        <Text style={styles.createaccount}>
          Vous n'avez pas de compte ? Créez-en un en cliquant
        </Text>
        <Button
          onPress={() => setCreateAccount(true)}
          title="S'inscrire"
          color="purple"
        />
      </SafeAreaView>
    </View>
  );
};

export default Login;
