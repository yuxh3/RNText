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
    Dimensions
} from 'react-native';

var {width} = Dimensions.get('window');
import MineBottonView from './MineBottonView';
import MineCommonCell from './MineCommonCell';
import MineCenterView from './MineCenterView';
export default class Mine extends Component {

    render() {
        return (
            <View style={styles.topStyle}>
                <View style={styles.topAllStyle}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginLeft:5}}>
                        <Image source={{uri:'icon_tabbar_mine'}} style={styles.topViewStyle}/>
                        <Text>小马哥电商</Text>
                    </View>
                    <Image source={{uri:'icon_cell_rightarrow'}} style={{width:30,height:30,marginRight:5}}/>

                    {this.renderBottomView()}
                </View>

                <View style={styles.centerViewStyle}>
                    <MineCommonCell
                        leftIcon="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                    <MineCenterView />
                </View>
                <MineBottonView />
            </View>
        );
    }

    renderBottomView(){
        return(
            <View style={styles.bootomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    }

    /**
     * @returns {Array}
     */
    renderBottomItem(){
        //数组
        var itemArr = [];
        var data = [{'number':'100','title':'码哥卷'},{'number':'12','title':'评价'},{'number':'50','title':'收藏'}];
        for(var i= 0;i<data.length;i++){
            itemArr.push(
                <View style={styles.bootemItemStyle} key={i}>
                    <Text style={{fontSize:12,color:'white'}}>{data[i].number}</Text>
                    <Text style={{fontSize:12,color:'white'}}>{data[i].title}</Text>
                </View>
            );
        }

        return itemArr;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:"column"
    },
    bottomStyles:{
        marginTop:6,
    },
    topStyle:{
        flexDirection:"column"
    },
    centerViewStyle:{
        flexDirection:"column"
    },
    topViewStyle:{
        width:70,
        height:70
    },
    topAllStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:200,
        backgroundColor:'rgba(255,96,0,1.0)',
        alignItems:'center'
    },
    bootomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
    },
    bootemItemStyle:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderRightColor:'white',
        width:(width/3)+1,
        height:45,
        backgroundColor:'rgba(255,255,255,0.4)',
        paddingTop:5,
        paddingBottom:5
    }
});
module.exports = Mine;