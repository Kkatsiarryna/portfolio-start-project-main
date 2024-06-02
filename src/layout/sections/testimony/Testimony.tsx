import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {Slider} from "../../../components/Slider/Slider";
import {Statistics} from "./statistics/Statistics";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Slider/>
                <Statistics/>
            </FlexWrapper>


        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 40vh;
    background-color: #dec8ff;
`

