import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Logo = () => {
    return (
        <LogoText href="">
            Logo
            {/*<Icon  iconId={'logoSVG'} />*/}
        </LogoText>
    );
};

const LogoText = styled.a`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 30px;
    color: ${theme.colors.font}
`