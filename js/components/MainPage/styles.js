import {Platform} from 'react-native';
const React = require('react-native');

const { StyleSheet, Dimensions, PixelRatio } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    container: {
      backgroundColor:'#e6eaec',
    },
    logoStyle: {
        marginTop:deviceHeight/30,
        marginLeft:20,
        width:deviceWidth/3,
        height:deviceWidth/3*0.306
    },
    settingBtnStyle: {
        marginTop:deviceHeight/25,
        marginRight:20,
        width:deviceWidth/17,
        height:deviceWidth/17,
    },
    likeBtnStyle: {
        width:deviceWidth/5,
        height:deviceWidth/5,
        margin:20
    },
    scrollViewContainer: {
      paddingTop: deviceHeight/32
    },
    removeYellowBtnStyle: {
        width:deviceWidth/40,
        height:deviceWidth/40,
    },
    card: {
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 1,
        height:deviceWidth-20
    },
    thumbnail: {
        flex: 1,
        width: deviceWidth-40,
        height: deviceWidth,
    },
    text: {
        fontSize: 20*deviceHeight/736,
        fontFamily:'Raleway-Bold',
        padding: 15,
    },
    text1: {
        fontSize: 17*deviceHeight/736,
        fontFamily:'Raleway-SemiBold',
        paddingBottom: 15,
        paddingLeft:15,
    },
    text2: {
        fontSize: 17*deviceHeight/736,
        fontFamily:'Raleway-SemiBold',
        paddingBottom: 15,
        color:'#bebebe'
    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pinStyle: {
        width:deviceWidth*0.025,
        height:deviceWidth*0.025*22/16,
        marginLeft:20,
        marginRight:7,
        marginTop:3
    }
};
