const moderateBlue = "hsl(238, 40%, 52%)"
const softRed = "hsl(358, 79%, 66%)"
const lightGrayishBlue = "hsl(239, 57%, 85%)"
const paleRed = "hsl(357, 100%, 86%)"
const darkBlue = "hsl(212, 24%, 26%)"
const grayishBlue = "hsl(211, 10%, 45%)"
const lightGray = "hsl(223, 19%, 93%)"
const veryLightGray = "hsl(228, 33%, 97%)"
const white = "hsl(0, 0%, 100%)"

export const COLORS = {
}

// SIZE
export const SIZE = {
    avatar: {
        desktop: "3.9rem"
    },
    votingBtn: {
        desktop: "2.5rem"
    }
}

// URL
const AVATAR_URL = "../assets/avatars/image-"
const ICON_URL = "../assets/icon-"

// FUNCTION
export const getImgUrl = (type, name) => {
    switch (type) {
        case "icon":
            return new URL(`${ICON_URL + name}.svg`, import.meta.url).href 
        case "avatar":
            return new URL(`${AVATAR_URL + name}.svg`, import.meta.url).href 
    }
}