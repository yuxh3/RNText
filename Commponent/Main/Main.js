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

import TabNavigator from 'react-native-tab-navigator';
import {Navigator} from 'react-native-deprecated-custom-components';


import Home from '../Home/Home';
import Mine from '../Mine/Mine';
import More from '../More/More';
import Shop from '../Shop/Shop';

export default class Main extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            selectedTab:'home'
        };
      }
    render() {
        return (
            
            <TabNavigator>
                {/*--首页--*/}
                {this.renderTabBarItem("首页", 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', '首页', Home)}
                {/*--商家--*/}
                {this.renderTabBarItem("商家", 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', Shop)}
                {/*--我的--*/}
                {this.renderTabBarItem("我的", 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', Mine)}
                {/*--更多--*/}
                {this.renderTabBarItem("更多", 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', More,3)}
            </TabNavigator>

        );
    }

    /**
     * @param title
     * @param iconName
     * @param selectedIconName
     * @param selectedTab
     * @param componentName
     * @param component
     * @param badgeText
     */
    renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component,badgeText){
        return(
                <TabNavigator.Item
                    title={title}
                    renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:selectedTab})}}
                    selected={this.state.selectedTab === selectedTab}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    badgeText = {badgeText}
                >

                    <Navigator
                        initialRoute={{name:componentName,component:component}}
                        configureScene={()=>{// 过渡动画
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />

                </TabNavigator.Item>

        );
    }
}
const styles = StyleSheet.create({
    iconStyle:{
        width:25,
        height:25,
    },

    selectedTitleStyle:{
        color:'orange'
    }
});

module.exports = Main;