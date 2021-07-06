  
import React from 'react'
import { Animated, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import Svg, { 
     G, Path, Defs, ClipPath, Rect
  } from 'react-native-svg'

import { icons, images, SIZES, COLORS } from '../constants'
import userData from '../data/userData'


const User = () => {
    const [user, setUser] = React.useState(userData)

    const toolsData = [
        {
            id: 1,
            icon: icons.badge
        },
        {
            id: 2,
            icon: icons.history
        }
    ]

    const appData = [
        {
            id: 1,
            categories: [1],
            
        }
    ]
    function renderHeader() {
        return (
           <View
                style={{
                    height: 250,
                    flexDirection: 'column'
                }}
           >
               <Image
                    source={user.banner}
                    style={{
                        width: '100%',
                        height: 250,
                    }}
               />

               <View
                    style={{
                        width: 30,
                        height: 30,
                        backgroundColor: COLORS.main,
                        borderRadius: 100,
                        position: 'absolute',
                        top: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: SIZES.padding * 2
                    }}
               >
                   <Image 
                        source={icons.leftarrow}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: '#fff'
                        }}
                   />
               </View>
                
                <View
                    style={{
                        width: 150,
                        height: 150,
                        backgroundColor: COLORS.main,
                        borderRadius: 500,
                        top: -70,
                        left: 120,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={user.avatar}
                        style={{
                            width: 140,
                            height: 140,
                            borderRadius: 500
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'center',top: -60,
                        left: 130,}}>
                    <Text style={{ fontSize: SIZES.body1, fontWeight: '600', color: COLORS.main }}>Khai Hoan</Text>
                    <Text style={{ fontSize: SIZES.body2, left: 30, fontWeight: '500', color: COLORS.text }}>Level 30</Text>
                </View>
           </View>
        )
    }
    return (
        <View style={style.container}>
            {renderHeader()}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1
    }
})

export default User