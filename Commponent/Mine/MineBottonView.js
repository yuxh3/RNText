/**
 * Created by yuxinhua on 2018/6/15.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,

} from 'react-native';

import MineCommonCell from './MineCommonCell';

export default class MineBottonView extends Component {
    render() {
        return (
            <View >
                <View style={{marginTop:10}}>
                    <MineCommonCell
                        leftIcon="draft"
                        leftTitle="小马哥钱包"
                        rightTitle="账户余额：¥100"
                    />
                    <MineCommonCell
                        leftIcon="like"
                        leftTitle="抵用卷"
                        rigthTitle="0"
                    />
                </View>

                <View style={{marginTop:10}}>
                    <MineCommonCell
                        leftIcon="card"
                        leftTitle="积分商场"
                    />
                </View>

                <View style={{marginTop:10}}>
                    <MineCommonCell
                        leftIcon="new_friend"
                        leftTitle="今日推荐"
                        rightIcon={true}
                        rightIconName='me_new'
                    />
                </View>

                <View style={{marginTop:10}}>
                    <MineCommonCell
                        leftIcon="pay"
                        leftTitle="我要合作"
                        rightTitle="轻松开店，招财进宝"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
});
module.exports = MineBottonView;