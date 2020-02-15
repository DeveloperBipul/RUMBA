import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Logo: {
    marginTop: 100,
    justifyContent: 'center',
    fontSize: 35,
    fontStyle: 'normal',
    fontWeight: '800',
    textAlign: 'center',
    color: '#57606f',
  },
  LogoIn: {
    marginTop: 32,
    fontSize: 35,
    fontStyle: 'normal',
    fontWeight: '800',
    textAlign: 'center',
    color: '#40407a',
  },
  Errormsg: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  Errormessage: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#F5D7CC',
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 40,
    marginHorizontal: 30,
  },
  InputTitle: {
    color: '#2f3542',
    fontSize: 10,
    height: 10,
    textTransform: 'uppercase',
  },
  input: {
    height: 40,
    paddingLeft: 6,
    borderBottomColor: '#2f3542',
    borderBottomWidth: 1,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#40407a',
    borderRadius: 25,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
  newuser: {
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
  },
  newusertext: {
    color: '#40407a',
    fontWeight: '500',
  },
});
