import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from "react-router-native";
import { UserProfile } from '../../components/UserProfile';

class Page extends React.Component {
  render() {
    const { logged, email } = this.props.user;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          App
        </Text>
        {
          logged ?
          <UserProfile {...this.props.user} />
          :
          <View>
            <TouchableOpacity
              style={styles.button}
            >
              <Link to="/login" >
                <Text style={styles.buttonText}> Login </Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGhost}
            >
              <Link to="/auth" >
                <Text style={styles.buttonGhostText}> Auth </Text>
              </Link>
            </TouchableOpacity>
          </View>
        }
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
            >
              <Link to="/login" >
                <Text style={styles.buttonText}>Login</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGhost}
            >
              <Link to="/auth" >
                <Text style={styles.buttonGhostText}>Auth</Text>
              </Link>
            </TouchableOpacity>
          </View>
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
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#61dafb',
    flex: 0.45,
    borderRadius: 4,
    padding: 10,
    height: 40
  },
  buttonGhost: {
    borderRadius: 4,
    flex: 0.45,
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#61dafb',
    marginLeft: 20
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
  buttonGhostText: {
    color: '#61dafb',
    textAlign: 'center'
  },
  buttons: {
    flex: 1,
    flexDirection: 'row'
  },
});

export const StartPage = connect(
  state => ({ user: state.users })
)(Page);
