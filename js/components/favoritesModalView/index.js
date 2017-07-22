
import React, { Component } from "react";
import {
    Modal,
    View,
    TextInput,
    PixelRatio,
    TouchableOpacity, Dimensions, Image, TouchableHighlight, TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { openDrawer } from '../../actions/drawer';
import { Container, Content, List, ListItem, Text, Icon, Thumbnail, Button, Body, Right, Switch ,Grid,Row,Col, Input, Header, Left} from 'native-base';
import {notify_stop, update_start} from '../../actions/notification';
import styles from "./styles";
import FavoritesView from './favoritesItem/index';

const removeIcon = require("../../../images/remove.png");
const sortIcon = require("../../../images/sort.png");

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


var favoritesList = [
    {
      profileImage:"../../../images/sort.png",
      name:"Jacky Chan",
      jobTitle:"Fix Back Door lock",
    },
];


class favoritesModalView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            is_price:1,
            is_distance:0,
            is_sort:0
        };
    }

    modalView() {
        this.props.notify_stop("SHOW_FAVORITES");
    }

    click_sortBtn = () => {
        if (this.state.is_sort==0) {
            this.setState({is_sort:1})
        } else {
            this.setState({is_sort:0})
        }
    }

    set_price = () => {
        this.setState({is_price:1}),
        this.setState({is_distance:0}),
        this.setState({is_sort:0})
    }

    set_distance = () => {
        this.setState({is_price:0}),
        this.setState({is_distance:1}),
        this.setState({is_sort:0})
    }

    display_saveButton() {
        if (this.state.is_sort==1) {
            return (
                <View>
                    <View style={styles.lineStyle} />
                    <View style={styles.footerStyle}>
                        <Button rounded style={styles.saveBtnStyle} onPress={() => {this.setState({is_sort:0})}}>
                            <Text style={{color:'white', fontFamily:'Raleway-Bold', fontSize:17}}>SAVE</Text>
                        </Button>
                    </View>
                </View>
            );
        }
    }

    display_sortItems() {
        if (this.state.is_sort==1) {
            return (
                <View style={styles.sortItemsContainerStyle}>
                    <TouchableOpacity style={{padding:deviceWidth*0.04}}  onPress={() => {this.set_price()}}>
                        {
                            this.state.is_price==1 
                            ? <Text style={{color:'#ff8000', fontFamily:'Raleway-SemiBold', fontSize:17*deviceHeight/736}}>Price</Text>
                            : <Text style={{color:'#666666', fontFamily:'Raleway-SemiBold', fontSize:17*deviceHeight/736}}>Price</Text>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity  style={{padding:deviceWidth*0.04, paddingTop:deviceWidth*0.01}} onPress={() => {this.set_distance()}}>
                        {
                            this.state.is_distance==1 
                            ? <Text style={{color:'#ff8000', fontFamily:'Raleway-SemiBold', fontSize:17*deviceHeight/736}}>Distance</Text>
                            : <Text style={{color:'#666666', fontFamily:'Raleway-SemiBold', fontSize:17*deviceHeight/736}}>Distance</Text>
                        }
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={true}
                onRequestClose={() => {this.props.notify_stop("SHOW_FAVORITES");}}
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
                        <TouchableWithoutFeedback onPress={() => {this.setState({is_sort:0})}}>
                            <View style={{marginLeft:deviceWidth*0.1, width:deviceWidth*0.8}}>

                                <Row style={{marginTop:20, justifyContent:'space-between'}}>
                                    <Text style={{color:'#2b2b2b', fontSize:33*deviceHeight/736, fontFamily:'Raleway-Bold'}}>FAVES</Text>
                                    <TouchableOpacity onPress={() => {this.click_sortBtn()}}>
                                        <Image source={sortIcon} style={styles.sortIconStyle} />
                                    </TouchableOpacity>
                                </Row>
                                <Row>
                                    <View style={{backgroundColor:'#ff8000', width:deviceWidth*0.08, height:5}} />
                                </Row>
                                <View style={styles.favoritesViewStyle}>
                                    <FavoritesView favoritesList={favoritesList[0]}/>
                                    <FavoritesView favoritesList={favoritesList[0]}/>
                                    <FavoritesView favoritesList={favoritesList[0]}/>
                                    <FavoritesView favoritesList={favoritesList[0]}/>
                                    <FavoritesView favoritesList={favoritesList[0]}/>
                                    <FavoritesView favoritesList={favoritesList[0]}/>
                                    <FavoritesView favoritesList={favoritesList[0]}/>
                                    <FavoritesView favoritesList={favoritesList[0]}/>
                                </View>
                                {this.display_sortItems()}
                            </View>
                        </TouchableWithoutFeedback>
                    </Content>

                    {/*{this.display_saveButton()}*/}

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


export default connect(mapStateToProps, bindAction)(favoritesModalView);