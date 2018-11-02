import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { AuthPage } from './containers/AuthPage';
import { LoginPage } from './containers/LoginPage';
import { UserPage } from './containers/UserPage';
import { StartPage } from './containers/StartPage';
import { EmailUpdate } from './containers/EmailUpdate';
import { PasswordReset } from './containers/PasswordReset';
import { PasswordUpdate } from './containers/PasswordUpdate';
import { ProfileUpdate } from './containers/ProfileUpdate';
import { history } from './redux/store';


export const Navigation = () => (
  <ConnectedRouter history={history}>
    <View style={styles.container}>
      <Route exact path="/" component={StartPage} />
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/user" component={UserPage} />
      <Route exact path="/passwordReset" component={PasswordReset} />
      <Route exact path="/passwordUpdate" component={PasswordUpdate} />
      <Route exact path="/emailUpdate" component={EmailUpdate} />
      <Route exact path="/profileUpdate" component={ProfileUpdate} />
    </View>
  </ConnectedRouter>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(40, 44, 52)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  }
});
