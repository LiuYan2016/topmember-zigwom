import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Dimensions, Image, TouchableOpacity, ScrollView, PixelRatio, TouchableWithoutFeedback, Alert
} from 'react-native';
import { Container, Content, List,Item, Input, Button, Icon, ListItem, Radio ,Spinner, Grid, Row, Col} from 'native-base';
import styles from "./styles";
import { Actions } from 'react-native-router-flux';
import SwipeCards from 'react-native-swipe-cards';
import { notify_stop,update_start } from '../../actions/notification';
import { connect } from "react-redux";

import SettingView from '../settingModalView/index'
import FavoritesView from '../favoritesModalView/index'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const logo = require('../../../images/anotherLogo.png');
const logo1 = require('../../../images/backBtn.png');
const logo2 = require('../../../images/home.png');
const logo3 = require('../../../images/like.png');
const logo4 = require('../../../images/no.png');
const logo5 = require('../../../images/pin.png');
const logo6 = require('../../../images/remove.png');
const logo7 = require('../../../images/remove-yellow.png');
const logo8 = require('../../../images/roomNumer.png');
const logo9 = require('../../../images/search.png');
const logo10 = require('../../../images/setting.png');
const logo11 = require('../../../images/shower.png');
const logo12 = require('../../../images/sort.png');



let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <TouchableWithoutFeedback onPress={() => Actions.detailedPage()}>
            <Image style={styles.thumbnail} source={this.props.image} />
        </TouchableWithoutFeedback>
        <View style={{position:'absolute', bottom:deviceWidth/5, backgroundColor:'transparent', flexDirection:'row', justifyContent: 'space-between', padding: 20}}>
            <Col style={{alignItems:'center'}}>
                <Image style={{width:deviceWidth*0.08, height:deviceWidth*0.08*45/60}} source={logo8} />
                <View style={{flexDirection:'row', marginTop:10}}>
                    <Text style={{color:'#ff8000', fontWeight:'700'}}>2</Text>
                    <Text style={{color:'white'}}> Bedroom</Text>
                </View>
            </Col>
            <Col style={{alignItems:'center'}}>
                <Image style={{width:deviceWidth*0.075, height:deviceWidth*0.075*54/58}} source={logo11} />
                <View style={{flexDirection:'row', marginTop:8}}>
                    <Text style={{color:'#ff8000', fontWeight:'700'}}>2</Text>
                    <Text style={{color:'white'}}> Bathroom</Text>
                </View>
            </Col>
            <Col style={{alignItems:'center', borderRadius:5, borderColor:'white', borderWidth:2}}>
                <Text style={{color:'white', fontSize:12*deviceHeight/736, marginTop:5}}>Starting from</Text>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Text style={{color:'white', fontWeight:'900', fontSize:15*deviceHeight/736}}>$</Text>
                    <Text style={{color:'white', fontWeight:'900', fontSize:20*deviceHeight/736}}> 1,500</Text>
                </View>
            </Col>
        </View>
        {/*<Image style={styles.thumbnail} source={{uri: this.props.image}} />*/}
        <Text style={styles.text}>Condo Townhouse in the Annex</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.text1}>181 Gerrard St E, Toronto</Text>
            <Image style={styles.pinStyle} source={logo5} />
            <Text style={styles.text2}>2</Text>
            <Text style={styles.text2}>km away</Text>
        </View>
      </View>
    )
  }
})
let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more images</Text>
      </View>
    )
  }
})

const Cards = [
  {name: '1', image: require('../../../images/hotel1.png')},
  {name: '2', image: require('../../../images/hotel2.png')},
  {name: '3', image: require('../../../images/hotel3.png')},
  {name: '4', image: require('../../../images/hotel4.png')},
  {name: '5', image: require('../../../images/hotel5.png')},
  {name: '6', image: require('../../../images/hotel6.png')},
  {name: '7', image: require('../../../images/hotel7.png')},
  {name: '8', image: require('../../../images/hotel8.png')},
  {name: '9', image: require('../../../images/hotel9.png')},
]
 
const Cards2 = [
  {name: '10', image: require('../../../images/hotel1.png')},
  {name: '11', image: require('../../../images/hotel2.png')},
  {name: '12', image: require('../../../images/hotel3.png')},
  {name: '13', image: require('../../../images/hotel4.png')},
]

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cards: Cards,
        outOfCards: false
    };
  }

  showShadow() {
      console.log('shadow displayed');
      if (this.state.cards.length >= 2) {
          return (
              <View style={{backgroundColor:'#252', width:deviceWidth-70, marginLeft:15, height:deviceHeight*0.02}} />
          );
      }
  }
  showShadow1() {
      if (this.state.cards.length >= 2) {
          return (
              <View style={{backgroundColor:'red', width:deviceWidth-110, marginLeft:35, height:deviceHeight*0.02}} />
          );
      }
  }

  unlike() {
    Alert.alert(
        'Dislike'
    )
  }
  like() {
    Alert.alert(
        'Like'
    )
  }

//   getInitialState() {
//     return {
//       cards: Cards,
//       outOfCards: false
//     }
//   }

  handleYup (card) {
    //   {this.showShadow()};
    console.log(`Yup for ${card.text}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  cardRemoved (index) {
    // console.log(`The index is ${index}`);
 
    // let CARD_REFRESH_LIMIT = 3
 
    // if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
    //   console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
 
    //   if (!this.state.outOfCards) {
    //     console.log(`Adding ${Cards2.length} more cards`)
 
    //     this.setState({
    //       cards: this.state.cards.concat(Cards2),
    //       outOfCards: true
    //     })
    //   }
 
    // }
 
  }

  
  
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {this.props.notification.notification.indexOf("SHOW_SETTING")>-1 && <SettingView/>}
          {this.props.notification.notification.indexOf("SHOW_FAVORITES")>-1 && <FavoritesView/>}

          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                  <Image source={logo} style={styles.logoStyle} />
              </View>
              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => {this.props.update_start("SHOW_FAVORITES")}}>
                      <Image source={logo2} style={styles.settingBtnStyle} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {this.props.update_start("SHOW_SETTING")}}>
                      <Image source={logo10} style={styles.settingBtnStyle} />
                  </TouchableOpacity>
              </View>
          </View>
          <View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.scrollViewContainer} style={{marginLeft:20}}>
                  <View style={{backgroundColor:'white', borderRadius:15, flexDirection:'row', marginRight:10}}>
                      <Text style={{margin:5, marginLeft:15, fontFamily:'Raleway-Regular' }}>Toronto</Text>
                      <TouchableOpacity style={{marginLeft:10, marginRight:15, marginTop:7.8}}>
                          <Image source={logo7} style={styles.removeYellowBtnStyle} />
                      </TouchableOpacity>
                  </View>
                  <View style={{backgroundColor:'white', borderRadius:15, flexDirection:'row', marginRight:10}}>
                      <Text style={{margin:5, marginLeft:15, fontFamily:'Raleway-Regular' }}>within 3km away</Text>
                      <TouchableOpacity style={{marginLeft:10, marginRight:15, marginTop:7.8}}>
                          <Image source={logo7} style={styles.removeYellowBtnStyle} />
                      </TouchableOpacity>
                  </View>
                  <View style={{backgroundColor:'white', borderRadius:15, flexDirection:'row', marginRight:10}}>
                      <Text style={{margin:5, marginLeft:15, fontFamily:'Raleway-Regular' }}>1 bedroom</Text>
                      <TouchableOpacity style={{marginLeft:10, marginRight:15, marginTop:7.8}}>
                          <Image source={logo7} style={styles.removeYellowBtnStyle} />
                      </TouchableOpacity>
                  </View>
                  <View style={{backgroundColor:'white', borderRadius:15, flexDirection:'row', marginRight:10}}>
                      <Text style={{margin:5, marginLeft:15, fontFamily:'Raleway-Regular' }}>1 bathroom</Text>
                      <TouchableOpacity style={{marginLeft:10, marginRight:15, marginTop:7.8}}>
                          <Image source={logo7} style={styles.removeYellowBtnStyle} />
                      </TouchableOpacity>
                  </View>

              </ScrollView>
          </View>
          <View style={{backgroundColor:'transparent', alignSelf:'center', width:deviceWidth-40, height:deviceWidth, marginTop:10, borderRadius:5}}>
              <SwipeCards
                  cards={this.state.cards}
                  loop={false}
            
                  renderCard={(cardData) => <Card {...cardData} />}
                  renderNoMoreCards={() => <NoMoreCards />}
                  showYup={true}
                  showNope={true}
            
                  handleYup={this.handleYup}
                  handleNope={this.handleNope}
                  cardRemoved={this.cardRemoved}
                  dragY={true}
                  stack={true}
                  stackOffsetX={0}
                  stackOffsetY={10}
                  smoothTransition={true}
                    
                  yupStyle={{backgroundColor:'#ff8000', borderWidth:20, borderColor:'black'}}
                  yupTextStyle={{color:'black'}}
                  yupView={{backgroundColor:'#ff8000', borderWidth:20, borderColor:'black'}}
              />
          </View>

            
          {/*{this.showShadow1()}*/}

          <View style={{flexDirection:'row', alignSelf:'center'}}>
              <TouchableOpacity onPress={() => {this.unlike()}}>
                  <Image source={logo4} style={styles.likeBtnStyle} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.like()}}>
                  <Image source={logo3} style={styles.likeBtnStyle} />
              </TouchableOpacity>
          </View>
        </Content>
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
export default connect(mapStateToProps, bindActions) (MainPage);