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
        btnChosen: moderateBlue,
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
    },
    replyTag: moderateBlue,
    submit: {
        btn: moderateBlue,
        text: veryLightGray
    },
    changeBtn: {
        btn: moderateBlue,
        btnHover: lightGrayishBlue
    },
    delete: {
        btn: softRed,
        btnHover: paleRed
    },
    divider: lightGray,
    pairPrimaryBtn: {
        btn: softRed,
        text: veryLightGray
    },
    pairSecondaryBtn: {
        btn: grayishBlue,
        text: veryLightGray
    },
    modal: {
        bck: white,
        header: darkBlue,
        content: grayishBlue
    }
}

export const LIGHT_FONT = 400;
export const REGULAR_FONT = 500;
export const BOLD_FONT = 700;
export const H5_FONT = "clamp(1.00rem, calc(0.95rem + 0.25vw), 1.25rem)";

export const CORNER_RADIUS = "15px";
export const SMALL_CORNER_RADIUS = "10px";

export const GRID_PERCENT_REPLY_MAIN = "0.2fr"

const BUTTON_GAP = '0.6em'
export const MAIN_PAGE = {
    gap: "1.5em",
    padding: "10em 1em",
}
export const BUTTONS = {
    reply: {
        colors: COLORS.changeBtn,
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
        colors: COLORS.changeBtn,
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
        colors: COLORS.delete,
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
    },
    submit: {
        colors: COLORS.submit,
        weight: BOLD_FONT,
        size: {
            width: {
                desktop: "100%"
            },
            height: {
                desktop: "3em"
            }
        },
        borderRadius: SMALL_CORNER_RADIUS
    },
    pairSecondaryDelete: {
        text: "No, Cancel",
        colors: COLORS.pairSecondaryBtn,
        weight: BOLD_FONT,
        size: {
            width: {
                desktop: "50%"
            },
            height: {
                desktop: "4em"
            }
        },
        borderRadius: SMALL_CORNER_RADIUS
    },
    pairPrimaryDelete: {
        text: "Yes, Delete",
        colors: COLORS.pairPrimaryBtn,
        weight: BOLD_FONT,
        size: {
            width: {
                desktop: "50%"
            },
            height: {
                desktop: "4em"
            }
        },
        borderRadius: SMALL_CORNER_RADIUS
    }
}

export const CARD = {
    // width of main and reply may be removed later
    main: {
        sizes: {
            width: {
                desktop: "55%",
            },
            gap: "0.4em",
            padding: {
                desktop: "1.9em 1.1em"
            },
        }
    },
    reply: {
        sizes: {
            width: {
                desktop: "100%",
            },
            gap: "0.5em",
            padding: {
                desktop: "1.9em 1.2em"
            },
        }
    },

    updateComment: {
        gridTemplate: {
            desktop: 
            `"vote avatar name you date" auto
            "vote content content content content" auto
            ". . . . btn" auto /
            auto auto auto 0.2fr 1fr`
        }
    },
    writeReply: {
        gridTemplate: {
            desktop:
            `"avatar content btn" 1fr
            ". content ." 1fr /
            auto 1fr 0.25fr
            `
        }
    },

    peopleComment: {
        gridTemplate: {
            desktop: 
            `"vote avatar name date . otherBtn" auto
            "vote content content content content content" auto
            ". content content content content content" auto /
            ${GRID_PERCENT_REPLY_MAIN} auto auto auto auto 1fr`
        }
    },
    userComment: {
        gridTemplate: {
            desktop: 
            `"vote avatar name you date otherBtn" auto
            "vote content content content content content" auto 
            ". content content content content content" auto /
            ${GRID_PERCENT_REPLY_MAIN} auto auto auto auto 1fr`
        }
    },
    backgroundColor: COLORS.cardBck,
    borderRadius: CORNER_RADIUS,
    
}
export const YOU_TAG = {
    colors: COLORS.youTag,
    text: "you",
    weight: REGULAR_FONT,
    padding: {
        desktop: "0.1em 0.4em"
    }
}
export const REPLY_TAG = {
    colors: COLORS.replyTag,
    weight: REGULAR_FONT,
    padding: {
        desktop: "0.5em"
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

export const TEXTAREA = {
    sizes: {
        width: "100%",
        height: {
            desktop: "10em"
        },
        padding: {
            desktop: "1em 1.1em"
        },
        font: {
            desktop: "0.9em"
        }
    },
    borderRadius: SMALL_CORNER_RADIUS,
    colors: {
        border: moderateBlue,
        text: darkBlue
    }
}

export const MODAL = {
    colors: COLORS.modal,
    size: {
        width: {
            desktop: "40vw"
        },
        height: {
            desktop: "30vh"
        }
    },
    header: "Delete comment",
    content: "Are you sure you want to delete this comment? This will remove the comment and can't be undone",
    btns: {
        primary: BUTTONS.pairPrimaryDelete,
        secondary: BUTTONS.pairSecondaryDelete
    }
}

// URL
const AVATAR_URL = "../assets/avatars/image-"
const ICON_URL = "../assets/icon-"

// FUNCTION
// export const getImgUrl = (type, name) => {
//     switch (type) {
//         case "icon":
//             return new URL(`${ICON_URL + name}.svg`, import.meta.url).href 
//         case "avatar":
//             return new URL(`${AVATAR_URL + name}.png`, import.meta.url).href 
//     }
// }