import React from 'react';
import styled, {css}  from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type WorkPropsType = {
    iconId: string
    description: string
    color?: string
    blockType? : "accent" | "noAccent"

}

export const Work = (props: WorkPropsType) => (
    <StyledWork blockType={props.blockType} >
        <Block >
        <Icon iconId={props.iconId} width="30" height="30" viewBox="0 0 30 30"/>
        <Description>{props.description}</Description>
        </Block>
    </StyledWork>
);

const StyledWork = styled.div<{ blockType?: "accent" | "noAccent" }>`
    ${props => props.blockType === "accent" && `
        background-color: ${theme.colors.accent};
        color: ${theme.colors.font};
    `}
    
    ${props => props.blockType === "noAccent" && `
        background-color: ${theme.colors.secondAccent};
        color: ${theme.colors.thirdBg};
    `}
    font-family: "Poppins", sans-serif;
    max-width: 288px;
    width: 100%; 
    height: 295px;
    display: flex;
    font-weight: 700;
    font-size: 20px;
    
`

const Description = styled.span`
    
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 0 35px 30px;
`