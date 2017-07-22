import {Platform} from 'react-native';
const React = require('react-native');

const { StyleSheet, Dimensions, PixelRatio } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default {
    removeIconStyle: {
        width:deviceWidth/25,
        height:deviceWidth/25,
        marginLeft:deviceWidth*0.07,
        marginTop:deviceWidth*0.09,
    },
    sortIconStyle: {
        width:deviceWidth/17,
        height:deviceWidth/17*1.5,
        marginTop:deviceHeight*0.014
    },
    lineStyle: {
        backgroundColor:'#e3e3e3',
        width:deviceWidth,
        height:1
    },
    footerStyle: {
        width:deviceWidth,
        height:deviceWidth*0.2222,
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent:'center'
    },
    saveBtnStyle: {
        backgroundColor:'#ff8000',
        width:deviceWidth*0.8,
        height:deviceHeight*0.07745,
        justifyContent:'center',
        marginLeft:deviceWidth*0.1
    },
    sortItemsContainerStyle: {
        position:'absolute',
        marginTop:deviceHeight*0.1,
        borderWidth:2,
        borderColor:'#cccccc',
        borderRadius:10,
        width:deviceWidth*0.35,
        alignSelf:'flex-end',
        backgroundColor:'white'
    },
    favoritesViewStyle: {
        marginTop:deviceHeight*0.075,
        marginLeft:deviceWidth*0,
        width:deviceWidth*0.8
    }
};
