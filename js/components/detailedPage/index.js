import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Dimensions, Image, TouchableOpacity, ScrollView, PixelRatio, Modal, TouchableWithoutFeedback
} from 'react-native';
import { Container, Content, List,Item, Input, Button, Icon, ListItem, Radio ,Spinner, Grid, Row, Col} from 'native-base';
import styles from "./styles";
import { Actions } from 'react-native-router-flux';
import { notify_stop,update_start } from '../../actions/notification';
import { connect } from "react-redux";
import Swiper from 'react-native-swiper';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const image = require('../../../images/backgroundView.png');
const image1 = require('../../../images/detail-bath.png');
const image2 = require('../../../images/detail-bed.png');
const image3 = require('../../../images/detail-parking.png');
const image4 = require('../../../images/detail-ruler.png');
const image5 = require('../../../images/bycle.png');
const image6 = require('../../../images/love.png');
const image7 = require('../../../images/left-back.png');
const image8 = require('../../../images/contact-mail.png');
const image9 = require('../../../images/contact-phone.png');
const image11 = require('../../../images/share.png');
const image12 = require('../../../images/like.png');
const image13 = require('../../../images/no.png');
const hotel1 = require('../../../images/hotel1.png');
const hotel2 = require('../../../images/hotel2.png');
const hotel3 = require('../../../images/hotel3.png');
const hotel4 = require('../../../images/hotel4.png');
const hotel5 = require('../../../images/hotel5.png');
const mapImage = require('../../../images/screenshot-2.png');


class DetailedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  click_Image() {
      Actions.detailedImageView()
  }

  render() {
    return (
        <Container>
            <Content>
                <View style={styles.container}>

                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                    >
                    <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
                        <Container style={{backgroundColor:'rgba(76, 76, 76, 0.8)', width:deviceWidth, height:deviceHeight}}>
                            <View style={{alignItems:'center', alignSelf:'center', flexDirection:'row', marginTop:deviceHeight*0.4}}>
                                <TouchableOpacity style={{marginRight:deviceWidth*0.04, backgroundColor:'#66cc00', width:deviceWidth*0.2, height:deviceWidth*0.2, borderRadius:deviceWidth*0.1, alignItems:'center', justifyContent:'center'}} onPress={() => this.setModalVisible(false)}>
                                    <Image source={image9} style={styles.iconStyle} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginLeft:deviceWidth*0.04, backgroundColor:'#ff8000', width:deviceWidth*0.2, height:deviceWidth*0.2, borderRadius:deviceWidth*0.1, alignItems:'center', justifyContent:'center'}} onPress={() => this.setModalVisible(false)}>
                                    <Image source={image8} style={styles.iconStyle} />
                                </TouchableOpacity>
                            </View>
                        </Container>
                    </TouchableWithoutFeedback>
                </Modal>

                    <Row style={{height:deviceHeight*0.4, width:deviceWidth}}>
                        <Swiper style={styles.swiperStyle} loop={false}  dotColor='#cccccc' activeDotColor='#ff8000' height={deviceHeight*0.41}>
                            <TouchableWithoutFeedback onPress={() => {this.click_Image()}}>
                                <Image source={hotel1} style={{width:deviceWidth, height:deviceHeight*0.4}} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {this.click_Image()}}>
                                <Image source={hotel2} style={{width:deviceWidth, height:deviceHeight*0.4}} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {this.click_Image()}}>
                                <Image source={hotel3} style={{width:deviceWidth, height:deviceHeight*0.4}} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {this.click_Image()}}>
                                <Image source={hotel4} style={{width:deviceWidth, height:deviceHeight*0.4}} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => {this.click_Image()}}>
                                <Image source={hotel5} style={{width:deviceWidth, height:deviceHeight*0.4}} />
                            </TouchableWithoutFeedback>
                        </Swiper>
                    </Row>
                    <View style={{flexDirection:'row', justifyContent:'space-between', position:'absolute', top:deviceHeight*0.04}}>
                        <Col>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Image source={image7} style={styles.backBtnStyle} />
                            </TouchableOpacity>
                        </Col>
                        <Col style={{flexDirection:'row', justifyContent:'flex-end'}}>
                            <TouchableOpacity style={styles.bycleStyle}>
                                <Image source={image5} style={styles.bycleImageStyle} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.likeStyle}>
                                <Image source={image6} style={styles.loveImageStyle} />
                            </TouchableOpacity>
                        </Col>
                    </View>

                    <View style={styles.rowStyle}>
                        <Text style={{fontFamily:'Raleway-Bold', fontSize:33*deviceHeight/736}}>Stunning Lake view Corner Suite</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={{fontFamily:'Raleway-SemiBold', fontSize:18*deviceHeight/736}}>Financial District</Text>
                        <Text style={{fontFamily:'Raleway-SemiBold', fontSize:18*deviceHeight/736, marginTop:10}}>560 Front St W, Toronto, ON M5V 1C1</Text>
                    </View>
                    <View style={styles.lineStyle1} />
                    <View style={styles.rowStyle1}>
                        <View style={{alignItems:'center'}}>
                            <Image source={image2} style={styles.ImageStyle} />
                            <View style={{flexDirection:'row', marginTop:8}}>
                                <Text style={styles.bath_bed_parking_ruler_value_Style}>2</Text>
                                <Text style={styles.bath_bed_parking_ruler_text_Style}> Bed</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Image source={image1} style={styles.ImageStyle} />
                            <View style={{flexDirection:'row', marginTop:8}}>
                                <Text style={styles.bath_bed_parking_ruler_value_Style}>2</Text>
                                <Text style={styles.bath_bed_parking_ruler_text_Style}> Bath</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Image source={image3} style={styles.ImageStyle} />
                            <View style={{flexDirection:'row', marginTop:8}}>
                                <Text style={styles.bath_bed_parking_ruler_value_Style}>2</Text>
                                <Text style={styles.bath_bed_parking_ruler_text_Style}> Parking</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Image source={image4} style={styles.ImageStyle} />
                            <View style={{flexDirection:'row', marginTop:8}}>
                                <Text style={styles.bath_bed_parking_ruler_value_Style}>8789</Text>
                                <Text style={styles.bath_bed_parking_ruler_text_Style}> sq.ft</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lineStyle1} />
                    <View style={styles.rowStyle}>
                        <Text style={{fontFamily:'Raleway-Bold', fontSize:17*deviceHeight/736, color:'#ff8000'}}>Description</Text>
                    </View>
                    <View style={styles.rowStyle2}>
                        <Text style={{fontFamily:'Raleway-SemiBold', fontSize:16*deviceHeight/736}}>Platea sint quis conubia! Aneeamd senecute consepqus, inis, tincident, mollis? Termspus, alliquam isate mus, cumneuq ipsa, sed primis eum posurer netus, facilisis nobis reprehenderit utlricies. Quas dic...</Text>
                    </View>
                    <View style={styles.lineStyle1} />
                    <View style={styles.rowStyle}>
                        <Text style={{fontFamily:'Raleway-Bold', fontSize:17*deviceHeight/736, color:'#ff8000'}}>Amenities</Text>
                    </View>
                    <View style={styles.rowStyle2}>
                        <Text style={{fontFamily:'Raleway-SemiBold', fontSize:16*deviceHeight/736}}>Platea sint quis </Text>
                    </View>
                    <View style={styles.lineStyle2} />
                    <View>
                        <Image source={mapImage} style={styles.mapStyle} />
                    </View>
                    <View style={{marginLeft:deviceWidth*0.08, width:deviceWidth*0.84, marginTop:deviceWidth*0.1, marginBottom:deviceWidth*0.2, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Image source={image11} style={styles.shareImageStyle} />
                        </TouchableOpacity>
                        <Text style={{fontFamily:'Raleway-SemiBold', fontSize:15*deviceHeight/736, marginTop:10}}>Share with a friend</Text>
                    </View>


                </View>
            </Content>

            <View style={styles.lineStyle} />
            <View style={styles.footerStyle}>
                <Row style={{alignItems:'center'}}>
                    <Col>
                        <Button rounded style={styles.contactBtnStyle} onPress={() => this.setModalVisible(true)}>
                            <Text style={{color:'white', fontFamily:'Raleway-Bold', fontSize:16}}>CONTACT</Text>
                        </Button>
                    </Col>
                    <Col style={{alignItems:'center'}}>
                        <View style={{flexDirection:'row', margin:3}}>
                            <Text style={{color:'#ff8000', fontSize:16*deviceHeight/736, fontWeight:'700'}}>$1680</Text>
                            <Text style={{color:'#2a2a2a', fontFamily:'Raleway-SemiBold', fontSize:15*deviceHeight/736}}> per month</Text>
                        </View>
                        <View style={{flexDirection:'row', margin:3}}>
                            <Text style={{color:'black', fontSize:15*deviceHeight/736, fontWeight:'600'}}>2</Text>
                            <Text style={{color:'#2a2a2a', fontFamily:'Raleway-SemiBold', fontSize:14*deviceHeight/736}}> km away from you</Text>
                        </View>
                    </Col>
                </Row>
            </View>
        </Container>
    )
  }
}
function bindActions(dispatch) {
    return {
        update_start : notify=> dispatch(update_start(notify)),
        notify_stop: notify => dispatch(notify_stop(notify)),
    }

}
const mapStateToProps = state => ({
    user: state.user,
    notification: state.notification,
});
export default connect(mapStateToProps, bindActions) (DetailedPage);