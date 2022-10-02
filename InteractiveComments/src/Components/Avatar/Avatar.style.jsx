import styled from "styled-components";
import * as constStyle from "../../Style/ConstantStyled"

const avatarSize = constStyle.SIZE.avatar

export const AvatarStyle = styled.img`
    width: ${avatarSize.desktop};
    height: ${avatarSize.desktop};
    border-radius: 50%;
`