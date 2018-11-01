import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { userLoginRequest, userCreateRequest } from '../../redux/users/actions';


class Page extends React.Component {
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
    this.props.userCreateRequest(data);
  }

  render() {
    const { userLogin, userPassword } = this.state;
    const { logged, email } = this.props.user;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({userLogin: text})}
          value={userLogin}
          placeholder='enter email'
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => this.setState({userPassword: text})}
          value={userPassword}
          placeholder='enter password'
        />
        <Button
          style={styles.button}
          title="Submit"
          onPress={this.userLogin}
          disabled={!userLogin && !userPassword}
        />
    </View>
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
  },
  textinput: {
    height: 40,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    padding: 4,
    borderWidth: 1,
    width: 200,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#61dafb',
    borderRadius: 4,
    color: '#fff'
  }
});

export const LoginPage = connect(
  state => ({ user: state.user }),
  dispatch => ({
    userLoginRequest: bindActionCreators(userLoginRequest, dispatch),
    userCreateRequest: bindActionCreators(userCreateRequest, dispatch)
  })
)(Page);
