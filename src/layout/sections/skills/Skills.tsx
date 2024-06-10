import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            {/*<SectionTitle>My Skills</SectionTitle>*/}
            <Container>
            <FlexWrapper wrap={"wrap"} align={"center"} justify={"space-between"} >

                    <Skill iconId={"figmaSVG"}/>
                    <Skill iconId={"htmlSVG"}/>
                    <Skill iconId={"cssSVG"}/>
                    <Skill iconId={"sassSVG"}/>
                    <Skill iconId={"reactSVG"}/>

            </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    padding: 50px 0;
    background-color: ${theme.colors.secondaryBg};
    display: flex;
`
