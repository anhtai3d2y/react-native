import { StyleSheet,TextInput, Button,Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React, { useState } from 'react';

export default function TabSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={{height: 40, width: 300}}
        placeholder="Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={{height: 40, width: 300}}
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
        secureTextEntry={true}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={{height: 40, width: 300}}
        placeholder="Confirm password"
        onChangeText={newText => setConfirmPassword(newText)}
        defaultValue={confirmPassword}
        secureTextEntry={true}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={{height: 40, width: 300}}
        placeholder="Full name"
        onChangeText={newText => setFullName(newText)}
        defaultValue={fullName}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={{height: 40, width: 300}}
        placeholder="Phone number"
        onChangeText={newText => setPhoneNumber(newText)}
        defaultValue={phoneNumber}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={{height: 40, width: 300}}
        placeholder="Address"
        onChangeText={newText => setAddress(newText)}
        defaultValue={address}
      />
      <Button
        title="REGISTER"
        onPress={() => Alert.alert('Register successfull!')}
      />
      {/* <EditScreenInfo path="/screens/TabSignup.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
});
