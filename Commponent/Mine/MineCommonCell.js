/**
 * Created by yuxinhua on 2018/6/12.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default class MineCommonCell extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftStyle}>
                    <Image source={{uri:this.props.leftIcon}} style={styles.leftViewStyle}/>
                    <Text>{this.props.leftTitle}</Text>
                </View>
                <View style={styles.rightStyle}>
                    {this.renderBottomView()}
                    <Image source={{uri:"home_arrow"}} style={styles.rightViewStyle}/>
                </View>
            </View>
        );
    }

    renderBottomView(){
        if (this.props.rightIcon){
            return(
                <Image source={{uri:this.props.rightIconName}} style={styles.rightIconStyle}/>
            )
        }else {
            return(
                <Text>{this.props.rightTitle}</Text>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection:'row',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        alignItems:'center',
        height:40
    },
    leftViewStyle:{
        width:30,
        height:30,
        marginRight:3
    },
    rightViewStyle:{
        width:30,
        height:30,
        marginLeft:2
    },
    rightIconStyle:{
        width:40,
        height:20,
    },
    leftStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:4
    },
    rightStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    }
});
module.exports = MineCommonCell;