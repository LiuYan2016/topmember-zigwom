
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    PixelRatio ,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Container, Content, List, ListItem, Icon, Thumbnail, Button, Body, Right, Switch ,Grid,Row,Col, Input, Header, Left} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {notify_stop, update_start} from '../../../actions/notification';
import { connect } from 'react-redux';

const window = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class favoritesItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onPressButton(){
        this.props.notify_stop("SHOW_FAVORITES");
        Actions.detailedPage();
    }

    render() {
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={()=>this.onPressButton()}>
                <Grid>
                  <Col style={{width:deviceWidth*0.33}}>
                        <Image
                            style={styles.imgContent}
                            source={require('../../../../images/hotel1.png')}
                        />
                  </Col>
                  <Col style={{marginTop:5}}>
                    <Row>
                        <Text style={{fontSize:20*deviceHeight/736, fontWeight:'700', color:'#2a2a2a'}}>$1890</Text>
                        <Text style={{marginTop:2, fontFamily:'Raleway-SemiBold', color:'#999999', fontSize:18*deviceHeight/736}}> /mo</Text>
                    </Row>
                    <Row>
                        <Text style={{ color:'#2a2a2a', fontSize:16*deviceHeight/736}}>394 Sherbourne St</Text>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Text style={styles.textStyle1}>2</Text>
                                <Text style={styles.textStyle2}> Bed</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Text style={styles.textStyle1}>2</Text>
                                <Text style={styles.textStyle2}> Bed</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Text style={styles.textStyle1}>2</Text>
                                <Text style={styles.textStyle2}> Bed</Text>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Text style={styles.textStyle1}>2</Text>
                                <Text style={styles.textStyle2}> Bed</Text>
                            </Row>
                        </Col>
                    </Row>
                  </Col>
                  
              </Grid>
              <View style={styles.lineStyle} />
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imgContent:{
        width: deviceWidth*0.3,
        height: deviceWidth*0.3*0.65,
    },
    lineStyle: {
        marginTop:deviceHeight*0.025, 
        marginBottom:deviceHeight*0.025, 
        backgroundColor:'#e3e3e3', 
        width:deviceWidth*0.8, 
        height:1
    },
    textStyle1: {
        color:'#2a2a2a', 
        fontWeight:'700', 
        fontSize:13*deviceHeight/736
    },
    textStyle2: {
        color:'#2a2a2a', 
        fontSize:13*deviceHeight/736,
        marginRight:5
    }
});

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

export default connect(mapStateToProps, bindAction)(favoritesItemView);