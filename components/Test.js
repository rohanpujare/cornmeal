import {StyleSheet, Image, Text, View} from 'react-native';

export default function Test() {
  return (
    <View style={styles.flex}>
      <Text style={styles.title}>
        Cornmeal
      </Text>
      <Image style={styles.images} source={require('../assets/little_guy.png')}>
      </Image>
      <Text style={styles.signText}>
        Sign In
      </Text>
      <View style={styles.loginCard}>
        <Text style={styles.paragraph}>
          Continue with Google
        </Text>
      </View>
      <View style={styles.loginCard}>
        <Text style={styles.paragraph}>
          Continue with Facebook
        </Text>
      </View>
      <View style={styles.push}>
        <Text style={styles.paragraph}>
          Continue with Apple
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginCard:{
    backgroundColor: 'white',
    borderRadius: '25px',
    marginLeft: '100px',
    marginRight: '100px'
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '10px',
    backgroundColor: '#DCB6EE',
    borderRadius: '50%',
    height: '400px',
    width: '150%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '100px',
    transform: 'translateX(-15%)'
  },
  paragraph: {
    fontSize: '15px',
    marginLeft: '30px'
  },
  signText: {
    marginLeft: '220px',
    fontSize: '17px'
  },
  images: {
    position: 'relative',
    marginLeft: '160px',
  },
  push: {
    backgroundColor: 'white',
    borderRadius: '25px',
    marginLeft: '100px',
    marginRight: '100px',
    marginBottom: '200px'
  },
  title: {
    marginLeft: '175px',
    fontSize: '30px'
  }
});