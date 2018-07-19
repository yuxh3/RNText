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
    TouchableOpacity,
    ScrollView

} from 'react-native';

import XNGCommonCell from './XNGCommonCell';

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingTop:10,paddingBottom:10}}>
                        <XNGCommonCell title='扫一扫' rightTitle=''/>
                    </View>

                    <View style={{ paddingTop:10,paddingBottom:10}}>
                        <XNGCommonCell title='扫一扫' rightTitle='' />
                        <XNGCommonCell title='省电模式' isSwitch={true} rightTitle='' />
                        <XNGCommonCell title='消息推送' rightTitle='' />
                        <XNGCommonCell title='邀请好友使用小马哥电商' rightTitle='' />
                        <XNGCommonCell title='清空缓存' rightTitle='1.94M' />

                    </View>

                    <View style={{ paddingTop:10,paddingBottom:10}}>
                        <XNGCommonCell title='意见反馈' rightTitle='' />
                        <XNGCommonCell title='问卷调查' rightTitle='' />
                        <XNGCommonCell title='支付帮助' rightTitle='' />
                        <XNGCommonCell title='网络诊断' rightTitle='' />
                        <XNGCommonCell title='关于马团' rightTitle='' />
                        <XNGCommonCell title='我要反馈' rightTitle='' />

                    </View>

                    <View style={{ paddingTop:10,paddingBottom:10}}>
                        <XNGCommonCell title='精品应用' rightTitle='' />
                        <XNGCommonCell title='人才反馈' rightTitle='' />
                        <XNGCommonCell title='支付帮助' rightTitle='' />
                        <XNGCommonCell title='网络诊断' rightTitle='' />
                        <XNGCommonCell title='关于马团' rightTitle='' />
                        <XNGCommonCell title='我要反馈' rightTitle='' />
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderNavBar(){
        return(
            <View style={styles.moreTitleStyle}>
                <Text style={{fontSize:15,color:'white'}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('点击了')}} style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.moreIconStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    moreTitleStyle:{
        height:44,
        backgroundColor:"rgba(255,96,0,1.0)",
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center'
    },
    moreIconStyle:{
        width:20,
        height:20,
    },
    rightViewStyle:{
        position:'absolute',
        right:10,
        bottom:10
    }
});
module.exports = More;