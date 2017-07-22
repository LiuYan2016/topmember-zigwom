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
    searchIconStyle: {
        width:deviceWidth/25,
        height:deviceWidth/25,
        alignSelf:'center',
        marginLeft:15,
        marginRight:10
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
    lineStyle: {
        backgroundColor:'#e3e3e3',
        width:deviceWidth,
        height:1
    },
    rowStyle: {
        marginTop:20
    },
    rowStyle1: {
        marginTop:20,
        justifyContent:'space-between',
        width:deviceWidth*0.75
    },
    rowSectionStyle: {
        marginTop:50
    },
    scrollViewContainer: {
        paddingVertical: 20
    },
    propertyStyle: {
        width:deviceWidth*0.355,
        height:deviceWidth*0.355*0.7,
        borderRadius:5,
        borderColor:'#e3e3e3',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    propertyIconStyle: {
        width:deviceWidth*0.12,
        height:deviceWidth*0.12,
        margin:7*deviceHeight/736,
        opacity: 0.2
    },
    textStyle: {
        color:'#2b2b2b', 
        fontFamily:'Raleway-Bold', 
        fontSize:16*deviceHeight/736, 
        opacity: 0.5
    },
    selected_propertyStyle: {
        width:deviceWidth*0.355,
        height:deviceWidth*0.355*0.7,
        borderRadius:5,
        borderColor:'#ff8000',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center'
    },
    selected_propertyIconStyle: {
        width:deviceWidth*0.12,
        height:deviceWidth*0.12,
        margin:7*deviceHeight/736,
    },
    selected_textStyle: {
        color:'#2b2b2b', 
        fontFamily:'Raleway-Bold', 
        fontSize:16*deviceHeight/736, 
    },
    check_plus_minusBtnStyle: {
        width:deviceWidth*0.07,
        height:deviceWidth*0.07
    }
};
