/**
 * Created by yuxinhua on 2018/6/12.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput

} from 'react-native';
import Dimensions from 'Dimensions';
var {width, height} = Dimensions.get('window');

export default class Home extends Component {
    render() {
        return (
            <View >
                {/** 标题栏*/}
                {this._tooBar()}
                {/** 轮播图*/}
                
            </View>
        );
    }

    _tooBar(){
        return(
            <View style={styles.toobarAllStyle}>
                <Text style={{color:'white',fontSize:14}}>广州</Text>
                <TextInput
                    placeholder="输入商家,品类,商圈"
                    style={styles.navToobarstyle}
                    underlineColorAndroid="transparent"
                />
                    <Image source={{uri:'icon_message'}} style={styles.ImagStyle}/>
                    <Image source={{uri:'icon_shop_search'}} style={styles.ImagStyle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navToobarstyle:{//输入框的样式
        width:width*0.71,
        height:35,
        backgroundColor:'white',
        borderRadius:17,
        paddingLeft:12,
        fontSize:14,
        paddingBottom:5
    },
    toobarRightStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    toobarAllStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'rgba(255,96,0,1.0)',
        height:50
    },
    ImagStyle:{
        width:25,
        height:25
    }
});
module.exports = Home;