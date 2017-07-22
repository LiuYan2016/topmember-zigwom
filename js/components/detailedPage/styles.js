import {Platform} from 'react-native';
const React = require('react-native');

const { StyleSheet, Dimensions, PixelRatio } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    container: {
        backgroundColor:'white',
        flex: 1,
        width: null,
    },
    // swiperStyle: {
    //     width:deviceWidth,
    //     height:deviceHeight
    // },
    backBtnStyle: {
        width:deviceWidth*0.06,
        height:deviceWidth*0.06,
        marginLeft:deviceWidth*0.07,
    },
    iconStyle: {
        width:deviceWidth*0.07,
        height:deviceWidth*0.07
    },
    bycleImageStyle: {
        width:deviceWidth*0.037,
        height:deviceWidth*0.037*49/47,
    },
    loveImageStyle: {
        width:deviceWidth*0.037,
        height:deviceWidth*0.037*41/45,
    },
    footerStyle: {
        width:deviceWidth,
        height:deviceWidth*0.2222,
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent:'center',
    },
    contactBtnStyle: {
        backgroundColor:'#ff8000',
        width:deviceWidth*0.35,
        height:deviceHeight*0.07745,
        justifyContent:'center',
        marginLeft:deviceWidth*0.1
    },
    lineStyle: {
        backgroundColor:'#e3e3e3',
        width:deviceWidth,
        height:1
    },
    bycleStyle: {
        width:deviceWidth*0.09, 
        height:deviceWidth*0.09, 
        borderRadius:deviceWidth*0.045, 
        backgroundColor:'white',
        marginRight:deviceWidth*0.04,
        alignItems:'center',
        justifyContent:'center'
    },
    likeStyle: {
        width:deviceWidth*0.09, 
        height:deviceWidth*0.09, 
        borderRadius:deviceWidth*0.045, 
        backgroundColor:'#ff8000',
        marginRight:deviceWidth*0.08,
        alignItems:'center',
        justifyContent:'center'
    },
    rowStyle: {
        marginLeft:deviceWidth*0.08,
        width:deviceWidth*0.84,
        marginTop:deviceWidth*0.08
    },
    rowStyle1: {
        marginLeft:deviceWidth*0.08,
        width:deviceWidth*0.84,
        marginTop:deviceWidth*0.08,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rowStyle2: {
        marginLeft:deviceWidth*0.08,
        width:deviceWidth*0.84,
        marginTop:deviceWidth*0.04
    },
    lineStyle1: {
        marginLeft:deviceWidth*0.08,
        width:deviceWidth*0.84,
        marginTop:deviceWidth*0.08,
        backgroundColor:'#e3e3e3',
        height:1
    },
    lineStyle2: {
        marginLeft:deviceWidth*0.08,
        width:deviceWidth*0.84,
        marginTop:deviceWidth*0.16,
        backgroundColor:'#e3e3e3',
        height:1
    },
    ImageStyle: {
        width:deviceWidth*0.09,
        height:deviceWidth*0.09
    },
    bath_bed_parking_ruler_value_Style: {
        color:'#ff8000',
        fontSize:15*deviceHeight/736,
        fontWeight:'700'
    },
    bath_bed_parking_ruler_text_Style: {
        color:'#2a2a2a',
        fontSize:15*deviceHeight/736,
        fontFamily:'Raleway-SemiBold'
    },
    shareImageStyle: {
        width:deviceWidth*0.12,
        height:deviceWidth*0.12
    },
    mapStyle: {
        width:deviceWidth, 
        height:deviceHeight*0.3
    }
};
