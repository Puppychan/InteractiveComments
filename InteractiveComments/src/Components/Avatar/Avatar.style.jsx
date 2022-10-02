import styled from "styled-components";
import * as constStyle from "../../Style/ConstantStyled"

const avatarSize = constStyle.AVATAR.sizes

export const AvatarStyle = styled.img`
    width: ${avatarSize.desktop};
    height: ${avatarSize.desktop};
    border-radius: 50%;
`