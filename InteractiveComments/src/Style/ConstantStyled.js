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
    bck: veryLightGray,
    vote: {
        btn: lightGrayishBlue,
        btnHover: moderateBlue,
        score: moderateBlue,
        bck: veryLightGray
    },
    username: darkBlue,
    date: grayishBlue,
    content: grayishBlue,
    replyBtn: moderateBlue,
    cardBck: white,
    youTag: {
        bck: moderateBlue,
        text: white
    }
}

export const LIGHT_FONT = 400;
export const REGULAR_FONT = 500;
export const BOLD_FONT = 700;

export const CORNER_RADIUS = "10px";

const BUTTON_GAP = '0.6em'
export const MAIN_PAGE = {
    gap: "1.5em",
    padding: "1.5em 1em",
}
export const BUTTONS = {
    reply: {
        colors: {
            btn: moderateBlue,
            btnHover: lightGrayishBlue,
        },
        text: "Reply",
        gap: BUTTON_GAP,
        size: {
            width: {
                desktop: "100%"
            },
            height: {
                desktop: "2em"
            }
        }
    },
    edit: {
        colors: {
            btn: moderateBlue,
            btnHover: lightGrayishBlue,
        },
        text: "Edit",
        gap: BUTTON_GAP,
        size: {
            width: {
                desktop: "100%"
            },
            height: {
                desktop: "2em"
            }
        }
    },
    delete: {
        colors: {
            btn: softRed,
            btnHover: paleRed,
        },
        text: "Delete",
        gap: BUTTON_GAP,
        size: {
            width: {
                desktop: "100%"
            },
            height: {
                desktop: "2em"
            }
        }
    }
}

export const CARD = {
    main: {
        sizes: {
            width: {
                desktop: "55%",
            },
            gap: "1em"
        }
    },
    reply: {
        sizes: {
            width: {
                desktop: "40%",
            },
        }
    },

    peopleComment: {
        gridTemplate: {
            desktop: 
            `"vote avatar name date . reply" auto
            "vote content content content content content" auto /
            auto auto auto 1fr 1fr 1fr`
        }
    },
    userComment: {
        gridTemplate: {
            desktop: 
            `"vote avatar name you date delete edit" auto
            "vote content content content content content content" auto /
            auto auto auto 0.2fr 1.2fr 1fr 1fr`
        }
    },
    backgroundColor: COLORS.cardBck,
    borderRadius: CORNER_RADIUS,
    padding: {
        desktop: "1.9em 1.5em"
    },
}
export const YOU_TAG = {
    colors: COLORS.youTag,
    text: "you",
    weight: REGULAR_FONT,
    padding: {
        desktop: "0.1em 0.4em"
    }
}

export const VOTE = {
    sizes: {
        width: {
            desktop: "2.6em"
        },
        votingBtn: {
            desktop: "1rem"
        },
        font: {
            desktop: "1.17em" // temporary
        }
    },
    gap: "1em",
    colors: COLORS.vote,
    padding: {
        desktop: "0.8em 0.6em"
    }
}

export const AVATAR = {
    sizes: {
        desktop: "2.7em"
    },
    
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
            return new URL(`${AVATAR_URL + name}.png`, import.meta.url).href 
    }
}