/**
 * Created by yuxinhua on 2018/6/14.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Switch
} from 'react-native';

export default class XNGCommonCell extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isOn:'true'
        };
      }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
                {this.rendeRightView()}
            </View>
        );
    }

    rendeRightView(){
        if (this.props.isSwitch){
            return(
                <Switch value={this.state.isOn == true} onValueChange={()=>this.setState({isOn:!this.state.isOn})} style={styles.switchStyle}/>
            )
        }else {
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.renderRightTitle()}
                    <Image source={{uri:'home_arrow'}} style={styles.imageStyle}/>
                </View>
            )
        }
    }
    renderRightTitle(){

        if(this.props.rightTitle.length>0){
             return(
                  <Text>{this.props.rightTitle}</Text>
                )
              }
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row',
        height:40,
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
    },
    textStyle:{
        fontSize:14,
        color:'black',
        marginLeft:5
    },
    imageStyle:{
        width:8,
        height:13,
        marginRight:8
    },
    switchStyle:{
        marginRight:8
    }
});
module.exports = XNGCommonCell;