import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";


export const Send = () => {
    return (
        <StyledSend>
            <StyledTitle>Send</StyledTitle>
            <Icon iconId={"arrowRightSVG"} width={"31"} height={"30"} viewBox={"0 0 31 30"}/>
        </StyledSend>
    );
};

const StyledSend = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
  
`

const StyledTitle = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 30px;
    color: ${theme.colors.accent};
`