import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import {loginStyles as styles} from '../styles/loginStyles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', senha);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo_sem_fundo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bem-vindo ao EcoLuz ⚡</Text>
      <Text style={styles.subtitle}>Monitore seu consumo de energia</Text>

      <TextInput
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Entrar
      </Button>
    </View>
  );
}
