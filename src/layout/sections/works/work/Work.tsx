import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type WorkPropsType = {
    iconId: string
    description: string
    color?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
                <Icon iconId={props.iconId} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                <Description>{props.description}</Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color:#676cdb;
    width: 288px;
    height: 295px;
`

const Description = styled.p`

`