/**
 * Created by yuxinhua on 2018/6/28.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    ListView

} from 'react-native';

import TopMenu from '../../LocalData/TopMenu.json';
import Dimensions from 'Dimensions';
var {width, height} = Dimensions.get('window');

export default class TopView extends Component {

    render(){
       return(
           <View>
               <ScrollView
                   horizontal={true}
                   pagingEnabled={true}
                   showsHorizontalScrollIndicator={false}
                   onMomentumScrollEnd={this.onScrollAnimationEnd}
               >
                   {this.renderScrollItem()}
               </ScrollView>
           </View>
       )
    }

    renderScrollItem(){

    }

    /**
     * 当一帧滚动结束的时候调用
     */
    onScrollAnimationEnd(e){
        var currentPage=Math.floor(e.nativeEvent.contentOffset.x/ width);
    }
}
const styles = StyleSheet.create({

});
module.exports = TopView;
