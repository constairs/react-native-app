import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';
import { Link } from "react-router-native";

export class UserProfile extends React.Component {
  render() {
    const { logged, email, photoURL } = this.props;
    const img = {uri: photoURL || 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'};
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/">
            <Text style={styles.navLink}>Home</Text>
          </Link>
        </View>
        {
          logged ?
          <View style={styles.userProfile}>
            <View style={styles.imgContainer}>
              <Image style={styles.userPhoto} source={img} />
            </View>
            <Text style={styles.userName}>
              {email}
            </Text>
          </View>
          : null
        }
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
  },
  imgContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flex: 0.15
  },
  userPhoto: {
    height: 40,
    width: 40,
  },
  userProfile: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    color: '#fff',
    flex: 0.85,
    fontSize: 18,
  }
});