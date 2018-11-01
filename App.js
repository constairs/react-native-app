import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { Provider } from 'react-redux';
import { LoginPage } from './containers/LoginPage';
import { UserPage } from './containers/UserPage';
import { configureStore } from './redux/store';
import { rootSaga } from './redux/sagas';

export const store = configureStore();

store.runSaga(rootSaga);

export default class App extends React.Component {
  state = {
    userLogin: '',
    userPassword: '',
    logged: false,
  }

  userLogin = () => {
    this.setState({
      logged: true,
    });
    const data = [
      this.state.userLogin,
      this.state.userPassword
    ];
  }

  render() {
    const { userLogin, userPassword } = this.state;
    return (
      <Provider store={store}>
        <NativeRouter>
            <View style={styles.container}>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/user" component={UserPage} />
            </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(40, 44, 52)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  }
});
