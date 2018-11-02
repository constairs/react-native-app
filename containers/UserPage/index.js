import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';
import { Link } from "react-router-native";
import { bindActionCreators } from 'redux';
import { UserProfile } from '../../components/UserProfile';
import { userLoginRequest } from '../../redux/users/actions';

class Page extends React.Component {
  render() {
    const { logged, email, photoURL } = this.props.user;
    const img = {uri: photoURL || 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'};
    return (
      <View style={styles.container}>
        <UserProfile {...this.props.user} />
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
  nav: {
    flexDirection: 'row',
    height: 100,
  },
  navLink: {
    color: '#fff',
    fontSize: 16,
  }
});

export const UserPage = connect(
  state => ({ user: state.users }),
  dispatch => ({ userLoginRequest: bindActionCreators(userLoginRequest, dispatch) })
)(Page);
