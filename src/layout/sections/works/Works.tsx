import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} >
                    <ExperienceWorking>
                        <span>4+</span>
                        <span>Years Experience Working</span>
                    </ExperienceWorking>

                    <Block>
                        <StyledWorkTitle>Developer and Designer, specialized in UI/UX and Web Developer</StyledWorkTitle>
                        <SecondBlock>
                            <Work iconId={"computerSVG"} description={"Front End Developer"}  blockType={"accent"}/>
                            <Work iconId={"paintSVG"} description={"UI/UX designer"} blockType={"noAccent"}/>
                            <Work iconId={"thunderSVG"} description={"Branding Designer"} blockType={"noAccent"}/>
                        </SecondBlock>

                    </Block>


                </FlexWrapper>
                {/*<SectionTitle>My Works</SectionTitle>*/}

            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: ${theme.colors.thirdBg};
    padding: 100px 0;

`
const StyledWorkTitle = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 180%;
    text-align: center;
    margin-bottom: 20px;
`
const ExperienceWorking = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 207px;
    margin-top: 20px;
    
    
    span:first-of-type {
        font-weight: 700;
        font-size: 100px;
        line-height: 120%;
        color: ${theme.colors.accent};
    }
    span:nth-child(2){
        font-weight: 700;
        font-size: 40px;
        line-height: 180%;
        color: ${theme.colors.font};
    }
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 894px;
`

const SecondBlock = styled.div`
    display: flex;
    gap: 15px;
`