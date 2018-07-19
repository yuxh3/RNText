/**
 * Created by yuxinhua on 2018/6/15.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image

} from 'react-native';

export default class MineCenterView extends Component{

    render(){
        return(
            <View style={styles.container}>
                <InnerView
                    topIcon="order1"
                    title="待付款"
                />
                <InnerView
                    topIcon="order2"
                    title="待使用"
                />
                <InnerView
                    topIcon="order3"
                    title="待评价"
                />
                <InnerView
                    topIcon="order4"
                    title="退款/售后"
                />
            </View>
        )
    }
}

class InnerView extends Component{
    render(){
            return(
            <View style={styles.innerStyle}>
                <Image source={{uri:this.props.topIcon}} style={styles.topStyle}/>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row'
    },
    topStyle:{
        width:35,
        height:30
    },
    innerStyle:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:5
    }
});
module.exports = MineCenterView;