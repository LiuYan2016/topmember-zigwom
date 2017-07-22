import React, { Component,  } from "react";
import { Image, Dimensions, TouchableOpacity, Modal, TextInput, PixelRatio } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text, Grid, Row, Col, Left, Picker
} from "native-base";
import { Actions } from "react-native-router-flux";
import { Field, reduxForm } from "redux-form";
import { setUser } from "../../actions/user";
import styles from "./styles";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const background = require('../../../images/backgroundView.png');
const logo = require("../../../images/logo.png");
const bullet = require("../../../images/bullet.png");
const googleIcon = require("../../../images/google1.png");
const facebookIcon = require("../../../images/facebook1.png");
const removeIcon = require("../../../images/remove.png");


const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  var ema = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short";
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included";
  }
  if (pw.length > 12) {
    error.password = "max 11 characters";
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = "Weak";
  }
  return error;
};

class Login extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      modalVisible:false,
      selected1: "key11",
      selected2: "key1"
    };
    this.renderInput = this.renderInput.bind(this);
  }

  setUser(name) {
    this.props.setUser(name);
  }
  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input
          placeholder={input.name === "email" ? "EMAIL" : "PASSWORD"}
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
            </Item>
          : <Text />}
      </Item>
    );
  }

  clickSignUpBtn() {
    Actions.mainPage(),
    this.setModalVisible(false)
    // Actions.mainPage()
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  onValueChange1(value: string) {
    this.setState({
      selected2: value
    });
  }
  
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Image source={background} style={styles.backgroundViewStyle}>
          <Content>
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
            <Container>
              <Content>
                <Button transparent onPress={() => {this.setModalVisible(false)}}>
                  <Image source={removeIcon} style={styles.removeIconStyle} />
                </Button>
                <View style={styles.modalViewStyle}>
                  <Text style={{color:'#2b2b2b', fontFamily:'Raleway-Bold', fontSize:35*deviceHeight/736, marginTop:20}}>Hello!</Text>
                  <Text style={{color:'#5c5c5c', fontFamily:'Raleway-SemiBold', fontSize:21*deviceHeight/736, marginTop:5}}>Create an account to continue</Text>
                  
                  <Text style={{fontFamily:'Raleway-Light', fontSize:15*deviceHeight/736, color:'gray', marginTop:40}}>Your Name</Text>
                  <Item style={styles.input_modal}>
                    <Input
                      style={{color:'black'}}
                      keyboardType= "default"
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder=""
                      onChangeText={cred => this.setState({ cred })} />
                  </Item>
                  <Text style={{fontFamily:'Raleway-Light', fontSize:15*deviceHeight/736, color:'gray', marginTop:20}}>Email Address</Text>
                  <Item style={styles.input_modal}>
                    <Input
                      style={{color:'black'}}
                      keyboardType= "email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder=""
                      onChangeText={cred => this.setState({ cred })} />
                  </Item>
                  <Text style={{fontFamily:'Raleway-Light', fontSize:15*deviceHeight/736, color:'gray', marginTop:20}}>Password</Text>
                  <Item style={styles.input_modal}>
                    <Input
                      style={{color:'black'}}
                      placeholder=""
                      secureTextEntry
                      onChangeText={password => this.setState({ password })} />
                  </Item>
                  <Text style={{fontFamily:'Raleway-Light', fontSize:15*deviceHeight/736, color:'gray', marginTop:20}}>Confirm Password</Text>
                  <Item style={styles.input_modal}>
                    <Input
                      style={{color:'black'}}
                      placeholder=""
                      secureTextEntry
                      onChangeText={password => this.setState({ password })} />
                  </Item>

                  <Row style={{}}>
                    <Col>
                      <Text style={{fontFamily:'Raleway-Light', fontSize:15*deviceHeight/736, color:'gray', marginTop:20}}>Gender</Text>
                      <Row>
                        <Picker
                          style={{borderBottomColor:'#e3e3e3', borderBottomWidth:1, width:deviceWidth*4.5/12}}
                          iosHeader="Select one"
                          mode="dropdown"
                          selectedValue={this.state.selected1}
                          onValueChange={this.onValueChange.bind(this)}
                        >
                          <Item label="Male" value="key00" />
                          <Item label="Female" value="key11" />
                        </Picker>
                        <Image source={bullet} style={styles.bulletStyle} />
                      </Row>
                    </Col>
                    <Col>
                      <Text style={{fontFamily:'Raleway-Light', fontSize:15*deviceHeight/736, color:'gray', marginTop:20}}>Age</Text>
                      <Row>
                        <Picker
                          style={{borderBottomColor:'#e3e3e3', borderBottomWidth:1, width:deviceWidth*5/12}}
                          iosHeader="Select one"
                          mode="dropdown"
                          selectedValue={this.state.selected2}
                          onValueChange={this.onValueChange1.bind(this)}
                        >
                          <Item label="20" value="key0" />
                          <Item label="21" value="key1" />
                          <Item label="22" value="key2" />
                          <Item label="23" value="key3" />
                          <Item label="24" value="key4" />
                        </Picker>
                        <Image source={bullet} style={styles.bulletStyle} />
                      </Row>
                    </Col>
                  </Row>

                  <Button rounded style={{alignSelf:'center', width:deviceWidth*0.41, height:deviceHeight*0.07745, justifyContent:'center', marginTop: 20, marginBottom: 20, backgroundColor:'#fe8103'}} onPress={() => {this.clickSignUpBtn()}}>
                    <Text style={{fontFamily:'Raleway-Bold', fontSize:17, color:'white'}}>LET'S GO!</Text>
                  </Button>
                </View>
                
              </Content>
              </Container>
            </Modal>

            <Grid>
              <Row style={{alignContent:'center', alignSelf:'center', justifyContent:'center'}}>
                <Image source={logo} style={styles.logoStyle} />
              </Row>
              <View style={{alignSelf:'center', width:deviceWidth*8/10}}>
                <Text style={{fontFamily:'Raleway-Light', fontSize:10, color:'white', marginTop:deviceHeight*0.30978}}>Email Address</Text>
                <Item style={styles.input}>
                  <Input
                    style={{height:deviceHeight*0.068, color:'white'}}
                    keyboardType= "default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=""
                    onChangeText={cred => this.setState({ cred })} />
                </Item>
                <Text style={{fontFamily:'Raleway-Light', fontSize:10, color:'white',}}>Password</Text>
                <Item style={styles.input1}>
                  <Input
                    style={{height:deviceHeight*0.068, color:'white'}}
                    placeholder=""
                    secureTextEntry
                    onChangeText={password => this.setState({ password })} />
                </Item>
                <Row style={{alignSelf:'flex-end'}}>
                  <TouchableOpacity>
                      <Text style={{fontFamily:'Raleway-SemiBold', fontSize:13, color:'white'}}>Forgot your password?</Text>
                  </TouchableOpacity>
                </Row>
                <Button rounded style={{width:deviceWidth*0.8, height:deviceHeight*0.07745, justifyContent:'center', marginTop:deviceHeight*0.048, backgroundColor:'#fe8103'}} onPress={() => {Actions.mainPage()}}>
                    <Text style={{fontFamily:'Raleway-Bold', fontSize:17, color:'white'}}>SIGN IN</Text>
                </Button>
                <Button iconLeft rounded bordered light style={{width:deviceWidth*0.8, height:deviceHeight*0.07745, justifyContent:'center', marginTop:deviceHeight*0.04, }}>
                    <Image source={googleIcon} style={styles.iconStyle} />
                    <Text style={{fontFamily:'Raleway-SemiBold', fontSize:16, color:'white'}}>   Sign up with Google</Text>
                </Button>
                <Button iconLeft rounded bordered light style={{width:deviceWidth*0.8, height:deviceHeight*0.07745, justifyContent:'center', marginTop:10,}}>
                    <Image source={facebookIcon} style={styles.iconStyle} />
                    <Text style={{fontFamily:'Raleway-SemiBold', fontSize:16, color:'white'}}>   Sign up with Facebook</Text>
                </Button>
                <Row style={{alignSelf:'center'}}>
                    <Text style={{fontFamily:'Raleway-Light', fontSize:13, color:'white'}}>You don't have an account?</Text>
                    <TouchableOpacity style={{borderBottomColor:'#7b797a', borderBottomWidth:1}} onPress={() => {this.setModalVisible(true)}}>
                      <Text style={{fontFamily:'Raleway-SemiBold', fontSize:13, color:'white'}}> Register!</Text>
                    </TouchableOpacity>
                </Row>

              </View>
                
            </Grid>
          </Content>
          </Image>
        </View>
      </Container>
    );
  }
}
const LoginSwag = reduxForm(
  {
    form: "test",
    validate
  },
  function bindActions(dispatch) {
    return {
      setUser: name => dispatch(setUser(name))
    };
  }
)(Login);
LoginSwag.navigationOptions = {
  header: null
};
export default LoginSwag;
