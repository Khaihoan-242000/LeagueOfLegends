  
import React from 'react'
import { Animated, SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import Svg, { 
     G, Path, Defs, ClipPath, Rect
  } from 'react-native-svg'

import { icons, images, SIZES, COLORS } from '../constants'
import categoryData from '../data/categoryData'
import generalsData from '../data/generalsData'




const Home = ({ navigation }) => {
    const [generals, setGenerals] = React.useState(generalsData)
    const [categories, setCategories] = React.useState(categoryData)

    const [selectedCategory, setSelectedCategory] = React.useState(null)

    const scrollX = React.useRef(new Animated.Value(0)).current

    function onSelectCategory(category) {
        // Filter restaurants
        let generalList = generalsData.filter(a => a.categories.includes(category.id))
        setGenerals(generalList)
        setSelectedCategory(category)
    }
    // Render Header
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={{ 
                        width: 50, 
                        paddingLeft: SIZES.padding * 2, 
                        justifyContent: 'center' 
                    }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" class="league" width="30" height="32" viewBox="0 0 30 32" fill="none">
                            <G>
                                <Path d="M1.80644 9.75049C0.655032 11.8373 0 14.2271 0 16.7683C0 19.3095 0.655032 21.7015 1.80644 23.7883V9.75049Z" fill="#C28F2C"></Path> 
                                <Path d="M15 2.02222C13.7829 2.02222 12.602 2.16921 11.4688 2.43647V4.75718C12.5907 4.44093 13.7738 4.26721 15 4.26721C22.0218 4.26721 27.7153 9.84627 27.7153 16.7305C27.7153 19.8307 26.5571 22.6659 24.6464 24.8463L24.2838 26.118L23.4814 28.9331C27.4184 26.2761 30.0023 21.8195 30.0023 16.7705C30 8.62355 23.2843 2.02222 15 2.02222Z" fill="#C28F2C"></Path> 
                                <Path d="M11.4688 24.4209H22.9737H23.2253C25.1723 22.4209 26.3713 19.7126 26.3713 16.7305C26.3713 10.5746 21.2806 5.58569 15 5.58569C13.767 5.58569 12.5816 5.78168 11.4688 6.1358V24.4209Z" fill="#C28F2C"></Path> 
                                <Path d="M10.1088 0H1.55029L3.16634 3.29844V28.7038L1.55029 32H21.1922L22.9737 25.7572H10.1088V0Z" fill="#C28F2C"></Path>
                            </G>
                        </Svg>
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent:'center', left: 10 }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" class="league" width="85" height="32" viewBox="0 0 85 32" fill="none">
                        <G clip-path="url(#clip0)">
                            <Path d="M59.7261 17.2695V31.749H56.5229L49.6035 22.34V31.749H46.5347V18.6228L45.8335 17.2695H49.801L56.6573 26.8087V17.2695H59.7261Z" fill="#C28F2C"></Path> 
                            <Path d="M27.8345 31.9991C28.8909 32.0048 29.8667 31.8267 30.7619 31.467C31.6582 31.1072 32.4307 30.6082 33.0828 29.9721C33.7337 29.336 34.2444 28.5811 34.6148 27.7098C34.8813 27.0828 35.0531 26.4205 35.1314 25.7238C35.1618 25.4532 35.2143 24.3614 35.1582 23.7025H27.8649L26.5665 26.3131H31.7704C31.5694 27.1376 31.1148 27.8171 30.409 28.3287C29.7019 28.8415 28.8559 29.095 27.8707 29.0904C27.2373 29.087 26.646 28.9637 26.0979 28.7204C25.5498 28.4772 25.073 28.1483 24.6675 27.7338C24.2608 27.3192 23.9441 26.8327 23.7139 26.2743C23.4848 25.7158 23.3715 25.1197 23.375 24.487C23.3785 23.8544 23.4977 23.2594 23.7326 22.7032C23.9675 22.1471 24.29 21.664 24.7014 21.2529C25.1116 20.8418 25.5884 20.522 26.1318 20.2902C26.6752 20.0595 27.263 19.9453 27.8976 19.9476C28.7565 19.9522 29.515 20.1417 30.1752 20.5163C30.8355 20.8909 31.3462 21.4299 31.7085 22.1334L34.588 20.7858C33.9885 19.6141 33.1026 18.6948 31.9305 18.0279C30.7584 17.3621 29.4261 17.0252 27.9338 17.0172C26.8774 17.0115 25.877 17.2034 24.9328 17.5905C23.9874 17.9776 23.1646 18.5098 22.4646 19.1882C21.7646 19.8654 21.2072 20.6579 20.7947 21.5635C20.381 22.4691 20.173 23.4387 20.1671 24.4699C20.1613 25.5011 20.3576 26.473 20.7538 27.3832C21.1511 28.2933 21.6922 29.0904 22.3782 29.7745C23.0641 30.4586 23.8752 30.9999 24.8089 31.3962C25.7415 31.7924 26.7512 31.9934 27.8345 31.9991Z" fill="#C28F2C"></Path> 
                            <Path d="M3.90672 17.2686H0L0.737403 18.7657V30.2542L0 31.7503H8.9657L9.77906 28.917H3.90672V17.2686Z" fill="#C28F2C"></Path> 
                            <Path d="M10.8613 31.7503H19.6003V28.9181H14.0423V25.7411H18.3394L19.1177 23.0185H14.0423V20.0893H19.6003V17.2686H10.8613V31.7503Z" fill="#C28F2C"></Path> 
                            <Path d="M36.2681 31.7503H45.007V28.9181H39.4491V25.7411H43.7473L44.5244 23.0185H39.4491V20.0893H45.007V17.2686H36.2681V31.7503Z" fill="#C28F2C"></Path> 
                            <Path d="M41.8662 14.9822C42.9227 14.9879 43.8985 14.8098 44.7936 14.45C45.69 14.0903 46.4624 13.5912 47.1145 12.9551C47.7654 12.3191 48.2761 11.5642 48.6466 10.6928C48.913 10.0659 49.0848 9.40352 49.1631 8.7069C49.1935 8.43625 49.2461 7.3445 49.19 6.68556H41.8966L40.5983 9.29503H45.8022C45.6011 10.1196 45.1466 10.799 44.4407 11.3107C43.7337 11.8234 42.8876 12.0769 41.9024 12.0724C41.269 12.069 40.6777 11.9456 40.1296 11.7024C39.5816 11.4591 39.1048 11.1302 38.6992 10.7157C38.2926 10.3011 37.9759 9.81464 37.7456 9.25621C37.5166 8.69777 37.4032 8.10164 37.4067 7.46897C37.4102 6.83631 37.5294 6.24132 37.7643 5.68517C37.9992 5.12901 38.3218 4.64595 38.7331 4.23483C39.1433 3.82371 39.6201 3.50395 40.1635 3.27212C40.7069 3.04144 41.2948 2.92724 41.9293 2.92952C42.7883 2.93409 43.5467 3.12366 44.207 3.49824C44.8673 3.87281 45.3779 4.41184 45.7402 5.11531L48.6197 3.76775C48.0202 2.59606 47.1344 1.67675 45.9623 1.00982C44.7901 0.344031 43.4579 0.00714122 41.9656 -0.000852784C40.9091 -0.00656279 39.9088 0.185293 38.9645 0.572432C38.0191 0.95957 37.1964 1.49174 36.4964 2.17009C35.7964 2.8473 35.2389 3.63985 34.8264 4.54545C34.4127 5.45106 34.2047 6.42062 34.1989 7.45184C34.193 8.48307 34.3893 9.45491 34.7855 10.3651C35.1828 11.2753 35.7239 12.0724 36.4099 12.7564C37.0959 13.4405 37.9069 13.9818 38.8406 14.3781C39.7732 14.7766 40.7817 14.9776 41.8662 14.9822Z" fill="#C28F2C"></Path> 
                            <Path d="M3.90672 0.252441H0L0.737403 1.7496V13.2381L0 14.7342H8.9657L9.77906 11.8997H3.90672V0.252441Z" fill="#C28F2C"></Path> 
                            <Path d="M10.8613 14.7342H19.6003V11.9008H14.0423V8.72494H18.3394L19.1177 6.00241H14.0423V3.07318H19.6003V0.252441H10.8613V14.7342Z" fill="#C28F2C"></Path> 
                            <Path d="M63.5688 14.7342H72.3067V11.9008H66.7498V8.72494H71.0469L71.824 6.00241H66.7498V3.07318H72.3067V0.252441H63.5688V14.7342Z" fill="#C28F2C"></Path> 
                            <Path d="M29.397 0.252441H24.8779L25.8338 2.09906L20.6147 14.7353H23.8659L24.9737 11.91H30.8519L31.9913 14.7353H35.3055L29.397 0.252441ZM26.0594 9.14063L27.9677 4.27457L29.8013 9.14063H26.0594Z" fill="#C28F2C"></Path> 
                            <Path d="M80.6094 4.23486V10.7477H82.2466V8.54591H83.9365L84.3455 7.11385H82.2466V5.71033H84.647V4.23486H80.6094Z" fill="#C28F2C"></Path> 
                            <Path d="M76.5625 4.10547C74.6553 4.10547 73.1045 5.62433 73.1045 7.4915C73.1045 9.35867 74.6553 10.8775 76.5625 10.8775C78.4697 10.8775 80.0204 9.35867 80.0204 7.4915C80.0204 5.62433 78.4685 4.10547 76.5625 4.10547ZM76.5625 9.30614C75.5423 9.30614 74.7125 8.49189 74.7125 7.4915C74.7125 6.49111 75.5423 5.67686 76.5625 5.67686C77.5827 5.67686 78.4124 6.49111 78.4124 7.4915C78.4124 8.49189 77.5827 9.30614 76.5625 9.30614Z" fill="#C28F2C"></Path> 
                            <Path d="M56.2401 14.9854C55.3099 14.9854 54.4778 14.8438 53.7451 14.5617C53.0124 14.2796 52.3918 13.8765 51.8847 13.3523C51.3775 12.8293 50.986 12.1955 50.7114 11.4509C50.4367 10.7075 50.2988 9.88065 50.2988 8.97161V0.252441H53.5125V8.80717C53.5125 9.78586 53.7451 10.5567 54.2102 11.122C54.6753 11.6873 55.352 11.9694 56.2401 11.9694C57.1283 11.9694 57.8049 11.6873 58.27 11.122C58.7351 10.5567 58.9677 9.78586 58.9677 8.80717V0.252441H62.1814V8.97276C62.1814 9.88179 62.0435 10.7086 61.7689 11.452C61.4943 12.1955 61.1028 12.8293 60.5956 13.3535C60.0884 13.8776 59.4679 14.2796 58.7351 14.5628C58.0012 14.8438 57.1703 14.9854 56.2401 14.9854Z" fill="#C28F2C"></Path> 
                            <Path d="M80.8372 23.1624L78.8365 22.7866C77.9367 22.6176 77.4412 22.1243 77.4412 21.3968C77.4412 20.4056 78.4813 19.8129 79.4863 19.8129C79.8287 19.8129 81.5325 19.8997 81.8831 21.5601L84.6399 20.2446C84.2332 19.0637 83.0155 17.0161 79.4664 17.0161C76.6045 17.0161 74.2754 19.0706 74.2754 21.5955C74.2754 23.7368 75.7408 25.307 78.1938 25.7958L80.1956 26.191C81.1843 26.3839 81.7745 26.9333 81.7745 27.6596C81.7745 28.5994 80.9599 29.1704 79.6487 29.1841C78.0582 29.2001 76.7727 28.0444 76.5741 26.907L73.9248 28.3516C74.5325 30.285 76.4046 32.0026 79.6289 32.0026C81.6576 32.0026 82.9104 31.2363 83.6034 30.5934C84.4927 29.77 85.0022 28.636 85.0022 27.4826C84.9999 25.3036 83.4047 23.6489 80.8372 23.1624Z" fill="#C28F2C"></Path> 
                            <Path d="M73.0452 21.6891C72.6514 20.8086 72.1138 20.0457 71.4325 19.3982C70.7501 18.7519 69.9519 18.2425 69.038 17.8702C68.123 17.4979 66.8211 17.2661 66.1258 17.2661H61.1147V31.7467H66.1165C67.1437 31.7467 68.1148 31.5651 69.0298 31.1951C69.9449 30.824 70.743 30.3158 71.4267 29.6705C72.1092 29.0242 72.6491 28.2624 73.0429 27.382C73.4379 26.5026 73.6354 25.5536 73.6366 24.5361C73.6354 23.5186 73.4391 22.5696 73.0452 21.6891ZM70.0454 26.2251C69.8198 26.7481 69.5137 27.2015 69.1268 27.5864C68.7389 27.9712 68.2784 28.2773 67.7432 28.5034C67.208 28.7295 66.6377 28.8426 66.0335 28.8426H64.2817V20.2205H66.0393C66.6447 20.2205 67.2138 20.3347 67.749 20.5619C68.2831 20.7892 68.7435 21.0952 69.1315 21.4801C69.5183 21.8661 69.8233 22.3229 70.0489 22.8528C70.2733 23.3827 70.3866 23.9434 70.3854 24.5338C70.3843 25.1402 70.2709 25.7032 70.0454 26.2251Z" fill="#C28F2C"></Path>
                        </G> 
                        <Defs>
                            <ClipPath id="clip0">
                                <Rect width="85" height="32" fill="white"></Rect>
                            </ClipPath>
                        </Defs>
                    </Svg>
                </View>
                
                <TouchableOpacity 
                    style={{ 
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                backgroundColor: COLORS.main,
                                borderRadius: 100,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={images.avatar}
                                style={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: 100
                                }}
                            />
                        </View>
                </TouchableOpacity>
            </View>
        )
    }
    // renderCategoryList
    function search() {
        return (
            <View 
                style={{
                    marginLeft: SIZES.padding * 2,
                    marginRight: SIZES.padding * 2,
                    // width: '100%',
                    marginTop: 30,
                    height: 50,
                    backgroundColor: COLORS.extra,
                    borderRadius: 15,
                    // justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 10,
                    flexDirection: 'row'
                }}
            >
                <Image 
                    source={icons.search}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.main
                    }}
                />
                <Text style={{fontSize: SIZES.body3, marginLeft: 10, color: COLORS.main}}>Search...</Text>

                <View style={{
                    position: 'absolute',
                    right: 10
                }}>
                    <Image 
                        source={icons.menu}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.main
                        }}
                    />
                </View>
            </View>
        )
    }
    // renderMainCategories
    function renderMainCategories() {
        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding * 1.4,
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <Image 
                        source={item.icon}
                        style={{
                            width: 50,
                            height: 50,
                        }}
                    />
                    
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ paddingLeft: SIZES.padding, paddingRight: SIZES.padding }}>
                <FlatList 
                    data={categoryData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 3 }}                
                />
            </View>
        )
    }
    // renderRestaurantList
    function renderRestaurantList() {
        const renderItem = ({item, index}) => {
            const inputRange = [
                (index - 1) * 250,
                index * 250,
                (index + 1) * 250,
            ]
            const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [0, -50, 0]
            })
            return (
                <TouchableOpacity>
                    <Animated.View
                        style={{
                            width: 250,
                            height: 350,
                            backgroundColor: COLORS.main,
                            borderRadius: 30,
                            marginLeft: SIZES.padding * 3,
                            marginRight: SIZES.padding *3,
                            transform: [{ translateY }] 
                        }}
                    >
                        <Image 
                            source={item.photo}
                            style={{
                                width: '100%',
                                height: 350,
                                position: 'absolute',
                                top: -80,
                            }}
                        />
                        <Text style={{
                            position: 'absolute',
                            left: 100,
                            bottom: 50,
                            fontSize: SIZES.body2,
                            color: COLORS.extra,
                            fontWeight: '600'
                        }}>{item.name}</Text>

                        <Text style={{
                            position: 'absolute',
                            left: 55,
                            bottom: 30,
                            fontSize: SIZES.body3,
                            color: '#fff'
                        }}>{item.description}</Text>
                    </Animated.View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ paddingLeft: SIZES.padding, paddingRight: SIZES.padding }}>
                <Animated.FlatList 
                    data={generals}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    onScroll={Animated.event(
                        [{ nativeEvent: {contentOffset: { x: scrollX}}}],
                        { useNativeDriver: true}
                    )}
                    scrollEventThrottle={16}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 25 }}
                    decelerationRate={0}
                    bounces={false}              
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={style.container}>
            {renderHeader()}
            {search()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
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


export default Home