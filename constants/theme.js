import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    main: "#C28F2C", // orange
    bg: "#242323",   // gray
    extra: "#151313",
    text: '#00B894'
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 5,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 25,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};


const appTheme = { COLORS, SIZES };

export default appTheme;