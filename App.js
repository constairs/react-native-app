import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthPage } from './containers/AuthPage';
import { LoginPage } from './containers/LoginPage';
import { UserPage } from './containers/UserPage';
import { StartPage } from './containers/StartPage';
import { EmailUpdate } from './containers/EmailUpdate';
import { PasswordReset } from './containers/PasswordReset';
import { PasswordUpdate } from './containers/PasswordUpdate';
import { configureStore } from './redux/store';
import { rootSaga } from './redux/sagas';
import { history } from './redux/store';

export const store = configureStore();

store.store.runSaga(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <ConnectedRouter history={history}>
              <View style={styles.container}>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/auth" component={AuthPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/user" component={UserPage} />
                <Route exact path="/passwordReset" component={PasswordReset} />
                <Route exact path="/passwordUpdate" component={PasswordUpdate} />
                <Route exact path="/emailUpdate" component={EmailUpdate} />
              </View>
          </ConnectedRouter>
        </PersistGate>
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
