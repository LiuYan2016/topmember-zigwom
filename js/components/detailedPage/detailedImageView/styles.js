import {Platform} from 'react-native';
const React = require('react-native');

const { StyleSheet, Dimensions, PixelRatio } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    container: {
        backgroundColor:'black',
        flex: 1,
        width: null,
    },
    backBtnStyle: {
        width:deviceWidth*0.06,
        height:deviceWidth*0.06,
        marginLeft:deviceWidth*0.07,
        marginTop:deviceWidth*0.1
    },
    imageStyle: {
        width:deviceWidth,
        // marginTop:deviceWidth*0.1
    }
};
