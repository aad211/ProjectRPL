/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, Image, ScrollView, TextInput } from 'react-native';
import style from './style';
import fireAuth from './auth';
import dbService from './firestore';

export default class HelloWorld extends Component {
  state = {nama: "", email: "", password: "", id: ""}

  inputNama = (inputText) => {
    this.setState({ nama: inputText })
  }

  inputEmail = (inputText) => {
    this.setState({ email: inputText })
  }

  inputPassword = (inputText) => {
    this.setState({ password: inputText })
  }

  inputId = (inputText) => {
    this.setState({ id: inputText })
  }

  namaKucing() {

  }
  
  render() {
    return (
      <ScrollView>
        <Text>
          Hallo, ini tanpa style
        </Text>
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Hello guys ada kuciiinggg!!!
          </Text>

          <Image
            source = {{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
            }}
            style = {{
              height: 200,
              width: 200
            }}
          />
        </View>

        <View style = {{ alignItems: 'center' }}>
          <TextInput 
            style = { style.input }
            placeholder = "Masukin nama kucingnya dah"
            onChangeText = {this.inputNama}
          />

          <Button
            onPress = {this.namaKucing}
            title = "Pencet aku dong, meoww"
          />
        </View>
        
        <View style = {{ alignItems: 'center' }}>
          <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
            Firebase Authentication Function
          </Text>

          <TextInput 
            style = { style.input }
            placeholder = "Email"
            onChangeText = {this.inputEmail}
          />

          <TextInput 
            style = { style.input }
            placeholder = "Password"
            onChangeText = {this.inputPassword}
          />

          <Button
            onPress = {() => {fireAuth.signIn(this.state.email, this.state.password)}}
            title = "SignIn"
          />
        </View>

        <View style = {{ alignItems: 'center' }}>
          <TextInput 
            style = { style.input }
            placeholder = "Email"
            onChangeText = {this.inputEmail}
          />

          <TextInput 
            style = { style.input }
            placeholder = "Password"
            onChangeText = {this.inputPassword}
          />

          <Button
            onPress = {() => {fireAuth.signUp(this.state.email, this.state.password)}}
            title = "SignUp"
          />
        </View>

        <View style = {{ alignItems: 'center' }}>
          <Text style = {{ marginBottom: 10, marginTop: 20, fontSize: 25 }}>
            Firestore CRUD Function
          </Text>
          <Button
            onPress = {() =>
              /*dbService.createDB ({
                first: "Alan",
                middle: "Mathison",
                last: "Turing",
                born: 1912
              })*/
              dbService.createDB ({
                name: {
                  first: "Alan",
                  middle: "Mathison",
                  last: "Turing"
                },
                born: 1912
              })
            }
            title = "Create Database"
          />
        </View>

        <View style = {{ alignItems: 'center' }}>
          <TextInput 
            style = { style.input }
            placeholder = "id"
            onChangeText = {this.inputId}
          />

          <Button
            onPress = {() => dbService.readDB(this.state.id)}
            title = "Read Database"
          />

          <Button
            onPress = {() =>
            dbService.updateDB (
              this.state.id,
              {
                first: "Muhammad",
                middle: "As'ad",
                last: "Muyassir",
                born: 2000
              }
            )
            }
            title = "Update Database"
          />

          <Button
            onPress = {() => dbService.deleteDB (this.state.id)}
            title = "Delete Database"
          />
        </View>

        <View style = {{ alignItems: 'center' }}>
          <Button
            onPress = {() => dbService.searchByField ("born", "==", 2000)}
            title = "Search id which born in 2000"
          />
        </View>

      </ScrollView>
    );
  }
}