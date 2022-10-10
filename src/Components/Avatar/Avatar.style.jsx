import styled from "styled-components";
import {AVATAR, getScreenPropsValue} from "../../Style/ConstantStyled"

export const AvatarStyle = styled.img`
    grid-area: ${props => props.gridArea};
    width: ${props => getScreenPropsValue(props.screensize, AVATAR.sizes)};
    height: ${props => getScreenPropsValue(props.screensize, AVATAR.sizes)};
    border-radius: 50%;
`