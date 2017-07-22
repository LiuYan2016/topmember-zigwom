
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  },
  backgroundViewStyle: {
    flex: 1,
    width: null,
    height: null,
  },
  logoStyle: {
    position:'absolute',
    marginTop:deviceHeight*0.076,
    width:deviceWidth*0.425,
    height:deviceWidth*0.425*0.6536
  },
  iconStyle: {
    width:deviceWidth/18,
    height:deviceWidth/18
  },
  bulletStyle: {
    width:deviceWidth/40*1.833333,
    height:deviceWidth/40,
    marginTop:20,
    marginLeft:-20,
    backgroundColor: "#fff"
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
    width: deviceWidth*0.8,
    alignSelf: 'center',
  },
  input1: {
    marginBottom: 10,
    width: deviceWidth*0.8,
    alignSelf: 'center',
  },
  input_modal: {
    marginBottom: 0,
    width: deviceWidth*10/12,
    alignSelf: 'center',
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  },
  modalViewStyle: {
    backgroundColor:'white',
    width:deviceWidth*10/12,
    marginLeft:deviceWidth/12
  },
  removeIconStyle: {
    width:deviceWidth/30,
    height:deviceWidth/30,
    marginLeft:20,
    marginTop:deviceWidth*0.09
  }
};
