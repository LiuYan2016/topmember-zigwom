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
import { connect } from "react-redux";
import ImageZoom from 'react-native-image-pan-zoom';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const hotel = require('../../../../images/hotel1.png');
const image7 = require('../../../../images/left-back.png');

class DetailedImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container style={styles.container}>
            <TouchableOpacity onPress={() => Actions.pop()}>
                <Image source={image7} style={styles.backBtnStyle} />
            </TouchableOpacity>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height/2}
                       imageWidth={deviceWidth}
                       imageHeight={deviceHeight*0.5}>
                <Image source={hotel} style={styles.imageStyle} />
            </ImageZoom>
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
export default connect(mapStateToProps, bindActions) (DetailedImageView);