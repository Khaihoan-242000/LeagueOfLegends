import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { Home, User } from '../screens'
import { isIphoneX } from 'react-native-iphone-x-helper';

import { COLORS, icons } from '../constants'

const Tab = createBottomTabNavigator()

// TabBarCustomButton
const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected

    if(isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center'}}>
                {children}
                <View style={{
                    width: 8,
                    height: 8,
                    backgroundColor: COLORS.main,
                    borderRadius: 100,
                    top: 10
                }}></View>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
            style={{
                flex: 1,
                height: 60,
                backgroundColor: COLORS.white
            }}
            activeOpacity={1}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if(isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 80,
                        backgroundColor: COLORS.bg
                    }}
                >
    
                </View>
                <BottomTabBar {...props.props} />
            </View>
        )
    } else {
        <BottomTabBar {...props.props} />
    }
}

// custom tabbar

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: COLORS.extra,
                    width: '95%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius: 30,
                    top: -20,
                    left: 10
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.main : COLORS.bg,
                                top: 10
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="mvp"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.email}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.main : COLORS.bg,
                                top: 10
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.main : COLORS.bg,
                                top: 10
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton 
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs