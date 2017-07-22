
import React, { Component } from "react";
import {
    Modal,
    View,
    TextInput,
    PixelRatio,
    TouchableOpacity, Dimensions, Image, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { openDrawer } from '../../actions/drawer';
import { Container, Content, List, ListItem, Text, Icon, Item, Thumbnail, Button, Body, Right, Switch ,Grid,Row,Col, Input, Header, Left, Footer, FooterTab} from 'native-base';
import MultiSlider from '../MultiSlider/MultiSlider';

import {notify_stop, update_start} from '../../actions/notification';
import styles from "./styles";

const removeIcon = require("../../../images/remove.png");
const searchIcon = require("../../../images/search.png");

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const house = require('../../../images/house.png');
const apartment = require('../../../images/apartment.png');
const condo = require('../../../images/condo.png');
const plusBtn = require('../../../images/plus.png');
const minusButton = require('../../../images/minus.png');
const minusButton1 = require('../../../images/minus1.png');
const checkBtn = require('../../../images/check.png');
const uncheckBtn = require('../../../images/uncheck.png');
const expandBtn = require('../../../images/expand.png');

class settingModalView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderOneChanging: false,
            sliderOneValue:[5],

            is_house:1,
            is_apartment:0,
            is_condo:0,

            bedrooms_value:0,
            bathrooms_value:0,
            parking_value:0,

            is_laundry:0,
            is_dogsAllowed:0,
            is_catsAllowed:0,
            is_airConditioning:0,
            is_balcony:0,
            is_parking:0,
        };
    }

    modalView() {
        this.props.notify_stop("SHOW_SETTING");
    }

    SliderOneValuesChangeStart () {
        this.setState({
        sliderOneChanging: true
        })
    }

    SliderOneValuesChange (values) {
        this.setState({
        sliderOneValue: values[0]
        })
    }

    SliderOneValuesChangeFinish () {
        this.setState({
        sliderOneChanging: false
        })
    }

    clickHouseIcon = () => {
        if (this.state.is_house==0) {
            this.setState({is_house:1})
        } else {
            this.setState({is_house:0})
        }
        // this.setState({is_house:1}),
        // this.setState({is_apartment:0}),
        // this.setState({is_condo:0})
    }
    clickApartmentIcon = () => {
        if (this.state.is_apartment==0) {
            this.setState({is_apartment:1})    
        } else {
            this.setState({is_apartment:0})
        }
        // this.setState({is_house:0}),
        // this.setState({is_apartment:1}),
        // this.setState({is_condo:0})
    }
    clickCondoIcon = () => {
        if (this.state.is_condo==0) {
            this.setState({is_condo:1})    
        } else {
            this.setState({is_condo:0})
        }
        // this.setState({is_house:0}),
        // this.setState({is_apartment:0}),
        // this.setState({is_condo:1})
    }

    bedroom_plus_click = () => {
        var temp = this.state.bedrooms_value;
        temp += 1;
        this.setState({bedrooms_value:temp});
    }
    bedroom_minus_click = () => {
        var temp = this.state.bedrooms_value;
        temp -= 1;
        this.setState({bedrooms_value:temp});
    }
    bathroom_plus_click = () => {
        var temp = this.state.bathrooms_value;
        temp += 1;
        this.setState({bathrooms_value:temp});
    }
    bathroom_minus_click = () => {
        var temp = this.state.bathrooms_value;
        temp -= 1;
        this.setState({bathrooms_value:temp});
    }
    parking_plus_click = () => {
        var temp = this.state.parking_value;
        temp += 1;
        this.setState({parking_value:temp});
    }
    parking_minus_click = () => {
        var temp = this.state.parking_value;
        temp -= 1;
        this.setState({parking_value:temp});
    }

    display_propertyType() {
        return (
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.scrollViewContainer} style={{}}>
                <TouchableOpacity onPress={() => {this.clickHouseIcon()}}>
                    {this.state.is_house==0 
                    ? <View style={styles.propertyStyle}>
                            <Image source={house} style={styles.propertyIconStyle} />
                            <Text style={styles.textStyle}>House</Text>
                        </View>
                    : <View style={styles.selected_propertyStyle}>
                            <Image source={house} style={styles.selected_propertyIconStyle} />
                            <Text style={styles.selected_textStyle}>House</Text>
                        </View>
                    }
                </TouchableOpacity>                
                <TouchableOpacity style={{marginLeft:15, marginRight:15}} onPress={() => {this.clickApartmentIcon()}}>
                    {this.state.is_apartment==0
                    ? <View style={styles.propertyStyle}>
                            <Image source={apartment} style={styles.propertyIconStyle} />
                            <Text style={styles.textStyle}>Apartment</Text>
                        </View>
                    : <View style={styles.selected_propertyStyle}>
                        <Image source={apartment} style={styles.selected_propertyIconStyle} />
                        <Text style={styles.selected_textStyle}>Apartment</Text>
                    </View>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:deviceWidth*0.1}} onPress={() => {this.clickCondoIcon()}}>
                    {this.state.is_condo==0
                    ? <View style={styles.propertyStyle}>
                            <Image source={condo} style={styles.propertyIconStyle} />
                            <Text style={styles.textStyle}>Condo</Text>
                        </View>
                    : <View style={styles.selected_propertyStyle}>
                            <Image source={condo} style={styles.selected_propertyIconStyle} />
                            <Text style={styles.selected_textStyle}>Condo</Text>
                        </View>
                    }
                </TouchableOpacity>
            </ScrollView>
        );
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={true}
                onRequestClose={() => {this.props.notify_stop("SHOW_SETTING");}}
            >
                <Container style={{backgroundColor:'white', width:deviceWidth, height:deviceHeight}}>
                    {/*<Header style={{backgroundColor:'white'}}>
                        <Left>
                        <Button transparent onPress={() => {this.modalView()}}>
                            <Image source={removeIcon} style={styles.removeIconStyle} />
                        </Button>
                        </Left>
                    </Header>*/}
                    <Content>
                        <Button transparent onPress={() => {this.modalView()}}>
                            <Image source={removeIcon} style={styles.removeIconStyle} />
                        </Button>
                        <Grid style={{marginLeft:deviceWidth*0.1, }}>
                            <Row style={styles.rowStyle}>
                                <Text style={{color:'#2b2b2b', fontSize:23*deviceHeight/736, fontFamily:'Raleway-Bold'}}>Location</Text>
                            </Row>
                            <Row style={styles.rowStyle}>
                                <View style={{borderColor:'#e3e3e3', borderWidth:1, borderRadius:5, flexDirection:'row', width:deviceWidth*0.75}}>
                                    <Image source={searchIcon} style={styles.searchIconStyle} />
                                    <Input placeholder="Search" />
                                </View>
                            </Row>
                            <Row style={[styles.rowStyle, styles.rowStyle1]}>
                                <Text style={{color:'#5c5c5c', fontFamily:'Raleway-SemiBold', fontSize:20*deviceHeight/736}}>Maximum Distance</Text>
                                <Text style={{color:'#2b2b2b', fontWeight:'700', fontSize:20*deviceHeight/736}}>{this.state.sliderOneValue}km</Text>
                            </Row>
                            <Row style={[styles.rowStyle, styles.rowStyle1]}>
                                <MultiSlider
                                    containerStyle={{height:30}}
                                    trackStyle={{height:12, borderRadius:7}}
                                    selectedStyle={{backgroundColor:'#ff8000'}}
                                    unselectedStyle={{backgroundColor:'white', borderWidth:4, borderColor:'#e3e3e3'}}
                                    markerStyle={{height:30, width: 30, borderRadius: 15, backgroundColor:'white', borderWidth: 2, borderColor: '#ff8000'}}
                                    pressedMarkerStyle={{backgroundColor:'white'}}
                                    values={this.state.sliderOneValue}
                                    sliderLength={310*deviceHeight/736}
                                />
                            </Row>
                            <Row style={styles.rowSectionStyle}>
                                <Text style={{color:'#2b2b2b', fontSize:23*deviceHeight/736, fontFamily:'Raleway-Bold'}}>Property Type</Text>
                            </Row>
                            <Row>
                                {this.display_propertyType()}
                            </Row>
                            <Row style={styles.rowStyle}>
                                <Text style={{color:'#2b2b2b', fontSize:23*deviceHeight/736, fontFamily:'Raleway-Bold'}}>Rooms</Text>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Bedrooms</Text>
                                <View style={{flexDirection:'row', marginRight:deviceWidth*0.15}}>
                                    { 
                                        this.state.bedrooms_value<1 ? <Image source={minusButton} style={styles.check_plus_minusBtnStyle} />
                                        :
                                            <TouchableOpacity onPress={() => {this.bedroom_minus_click()}}>
                                                <Image source={minusButton1} style={styles.check_plus_minusBtnStyle} />
                                            </TouchableOpacity>
                                        
                                    }
                                    <View style={{width:deviceWidth*0.14, alignItems:'center'}}>
                                        <Text style={{color:'#2b2b2b', fontWeight:'700', fontSize:22*deviceHeight/736}}>{this.state.bedrooms_value}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {this.bedroom_plus_click()}}>
                                        <Image source={plusBtn} style={styles.check_plus_minusBtnStyle} />
                                    </TouchableOpacity>
                                </View>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Bathrooms</Text>
                                <View style={{flexDirection:'row', marginRight:deviceWidth*0.15}}>
                                    { 
                                        this.state.bathrooms_value<1 ? <Image source={minusButton} style={styles.check_plus_minusBtnStyle} />
                                        :
                                            <TouchableOpacity onPress={() => {this.bathroom_minus_click()}}>
                                                <Image source={minusButton1} style={styles.check_plus_minusBtnStyle} />
                                            </TouchableOpacity>
                                        
                                    }
                                    <View style={{width:deviceWidth*0.14, alignItems:'center'}}>
                                        <Text style={{color:'#2b2b2b', fontWeight:'700', fontSize:22*deviceHeight/736, marginLeft:deviceWidth*0.05, marginRight:deviceWidth*0.05}}>{this.state.bathrooms_value}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {this.bathroom_plus_click()}}>
                                        <Image source={plusBtn} style={styles.check_plus_minusBtnStyle} />
                                    </TouchableOpacity>
                                </View>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Parkings</Text>
                                <View style={{flexDirection:'row', marginRight:deviceWidth*0.15}}>
                                    { 
                                        this.state.parking_value<1 ? <Image source={minusButton} style={styles.check_plus_minusBtnStyle} />
                                        :
                                            <TouchableOpacity onPress={() => {this.parking_minus_click()}}>
                                                <Image source={minusButton1} style={styles.check_plus_minusBtnStyle} />
                                            </TouchableOpacity>
                                        
                                    }
                                    <View style={{width:deviceWidth*0.14, alignItems:'center'}}>
                                        <Text style={{color:'#2b2b2b', fontWeight:'700', fontSize:22*deviceHeight/736, marginLeft:deviceWidth*0.05, marginRight:deviceWidth*0.05}}>{this.state.parking_value}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {this.parking_plus_click()}}>
                                        <Image source={plusBtn} style={styles.check_plus_minusBtnStyle} />
                                    </TouchableOpacity>
                                </View>
                            </Row>
                            <Row style={{marginTop:40}}>
                                <Text style={{color:'#2b2b2b', fontSize:23*deviceHeight/736, fontFamily:'Raleway-Bold'}}>Price Range</Text>
                            </Row>
                            <Row style={{marginTop:15}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>from</Text>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736}}> $30</Text>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}> to</Text>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736}}> $1000</Text>
                            </Row>
                            <Row style={{marginTop:15}}>
                                <MultiSlider 
                                    containerStyle={{height:20}}
                                    trackStyle={{height:12, borderRadius:7}}
                                    selectedStyle={{backgroundColor:'#ff8000'}}
                                    unselectedStyle={{backgroundColor:'white', borderWidth:4, borderColor:'#e3e3e3'}}
                                    markerStyle={{height:30, width: 30, borderRadius: 15, backgroundColor:'white', borderWidth: 2, borderColor: '#ff8000'}}
                                    pressedMarkerStyle={{backgroundColor:'white'}}
                                    values={[3,7]} 
                                    sliderLength={310*deviceHeight/736} />
                            </Row>
                            <Row style={{marginTop:40}}>
                                <Text style={{color:'#2b2b2b', fontSize:23*deviceHeight/736, fontFamily:'Raleway-Bold'}}>Size Range</Text>
                            </Row>
                            <Row style={{marginTop:15}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>from</Text>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736}}> $30</Text>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}> to</Text>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736}}> $1000</Text>
                            </Row>
                            <Row style={{marginTop:15}}>
                                <MultiSlider 
                                    containerStyle={{height:20}}
                                    trackStyle={{height:12, borderRadius:7}}
                                    selectedStyle={{backgroundColor:'#ff8000'}}
                                    unselectedStyle={{backgroundColor:'white', borderWidth:4, borderColor:'#e3e3e3'}}
                                    markerStyle={{height:30, width: 30, borderRadius: 15, backgroundColor:'white', borderWidth: 2, borderColor: '#ff8000'}}
                                    pressedMarkerStyle={{backgroundColor:'white'}}
                                    values={[3,7]} 
                                    sliderLength={310*deviceHeight/736} />
                            </Row>
                            <Row style={{marginTop:40}}>
                                <Text style={{color:'#2b2b2b', fontSize:23*deviceHeight/736, fontFamily:'Raleway-Bold'}}>Amenities</Text>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Laundry</Text>
                                <View style={{marginRight:deviceWidth*0.15}}>
                                    {
                                        this.state.is_laundry==0 ? 
                                        <TouchableOpacity onPress={() => {this.setState({is_laundry:1})}}>
                                            <Image source={uncheckBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity> 
                                        : <TouchableOpacity onPress={() => {this.setState({is_laundry:0})}}>
                                            <Image source={checkBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Dogs Allowed</Text>
                                <View style={{marginRight:deviceWidth*0.15}}>
                                    {
                                        this.state.is_dogsAllowed==0 ? 
                                        <TouchableOpacity onPress={() => {this.setState({is_dogsAllowed:1})}}>
                                            <Image source={uncheckBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity> 
                                        : <TouchableOpacity onPress={() => {this.setState({is_dogsAllowed:0})}}>
                                            <Image source={checkBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Cats Allowed</Text>
                                <View style={{marginRight:deviceWidth*0.15}}>
                                    {
                                        this.state.is_catsAllowed==0 ? 
                                        <TouchableOpacity onPress={() => {this.setState({is_catsAllowed:1})}}>
                                            <Image source={uncheckBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity> 
                                        : <TouchableOpacity onPress={() => {this.setState({is_catsAllowed:0})}}>
                                            <Image source={checkBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Air Conditioning</Text>
                                <View style={{marginRight:deviceWidth*0.15}}>
                                    {
                                        this.state.is_airConditioning==0 ? 
                                        <TouchableOpacity onPress={() => {this.setState({is_airConditioning:1})}}>
                                            <Image source={uncheckBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity> 
                                        : <TouchableOpacity onPress={() => {this.setState({is_airConditioning:0})}}>
                                            <Image source={checkBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Balcony</Text>
                                <View style={{marginRight:deviceWidth*0.15}}>
                                    {
                                        this.state.is_balcony==0 ? 
                                        <TouchableOpacity onPress={() => {this.setState({is_balcony:1})}}>
                                            <Image source={uncheckBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity> 
                                        : <TouchableOpacity onPress={() => {this.setState({is_balcony:0})}}>
                                            <Image source={checkBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </Row>
                            <Row style={{marginTop:15, justifyContent:'space-between'}}>
                                <Text style={{color:'#5c5c5c', fontSize:20*deviceHeight/736, fontFamily:'Raleway-SemiBold'}}>Parking</Text>
                                <View style={{marginRight:deviceWidth*0.15}}>
                                    {
                                        this.state.is_parking==0 ? 
                                        <TouchableOpacity onPress={() => {this.setState({is_parking:1})}}>
                                            <Image source={uncheckBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity> 
                                        : <TouchableOpacity onPress={() => {this.setState({is_parking:0})}}>
                                            <Image source={checkBtn} style={styles.check_plus_minusBtnStyle} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </Row>
                            <Row style={{marginTop:30, marginBottom:25}}>
                                <TouchableOpacity style={{alignSelf:'flex-start'}}>
                                    <Text style={{color:'#ff8000', fontSize:18*deviceHeight/736, fontFamily:'Raleway-SemiBold', textAlign:'left'}}>See all amenities</Text>
                                </TouchableOpacity>
                            </Row>
                        </Grid>
                    </Content>
                    <View style={styles.lineStyle} />
                    <View style={styles.footerStyle}>
                        <Button rounded style={styles.saveBtnStyle}>
                            <Text style={{color:'white', fontFamily:'Raleway-Bold', fontSize:17}}>SAVE</Text>
                        </Button>
                    </View>
                </Container>
            </Modal>
        );
    }
}


function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        update_start : notify=> dispatch(update_start(notify)),
        notify_stop: notify => dispatch(notify_stop(notify)),
    };
}

const mapStateToProps = state => ({
    user: state.user,
    notification: state.notification,
});


export default connect(mapStateToProps, bindAction)(settingModalView);