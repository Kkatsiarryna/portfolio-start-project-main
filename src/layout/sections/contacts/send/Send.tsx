import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";


export const Send = () => {
    return (
        <StyledSend>
            <StyledTitle>Send</StyledTitle>
            <Icon iconId={"arrowRightSVG"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
        </StyledSend>
    );
};

const StyledSend = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledTitle = styled.span`
    color: #676CDB;
`