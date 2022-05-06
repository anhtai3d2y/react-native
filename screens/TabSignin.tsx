import { StyleSheet, TextInput, Button,Alert, FlatList, ActivityIndicator  } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabSignin({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getMoviesFromApi = () => {
  return fetch('https://kma-gear-backend.herokuapp.com',{
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
    'Content-Type': 'application/json'
  },
})
    .then((response) => response.json())
    .then((text) => {
      setLoading(false)
      console.log(text)
      // setData(text)
      return text;
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error('err: ',error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
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
      <Button
        title="LOGIN"
        onPress={() => Alert.alert('Login successfull!')}
      />

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}

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
    marginBottom: 20
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
});
