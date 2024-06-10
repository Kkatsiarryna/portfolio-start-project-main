import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {Slider} from "../../../components/Slider/Slider";
import {Statistics} from "./statistics/Statistics";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper >
                    <Slider/>
                    <StatisticsWrapper>
                    <Statistics description={"Satisfaction Clients"} value={"100%"}/>
                        <Statistics description={"Clients On Worldwide"} value={"+80"}/>
                        <Statistics description={"Projects Done"} value={"743"}/>
                    </StatisticsWrapper>
               </FlexWrapper>
            </Container>
            {/*<SectionTitle>Testimony</SectionTitle>*/}



        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    display: flex;
    background-color: ${theme.colors.primaryBg};
    padding: 100px 0;
`
const StatisticsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: flex-start;
    margin-left: 110px;
    border: 1px solid red;
`
