import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type StatisticsPropsType = {
    description: string
    value: string
}

export const Statistics = (props: StatisticsPropsType) => {
   return (
        <StyledStatistics>
            <Description >{props.description}</Description>
            <Value>{props.value}</Value>
        </StyledStatistics>
    );
};

const StyledStatistics = styled.div`
    display: flex;
    flex-direction: column;
    
    & + & {
        margin-top: 30px;
    }
    
   
`


const Description = styled.span`
    font-weight: 700;
    font-size: 30px;
    color: ${theme.colors.font};
    
`

const Value = styled.span`
    font-weight: 700;
    font-size: 50px;
    color: ${theme.colors.accent};
    padding-top: 10px;
`