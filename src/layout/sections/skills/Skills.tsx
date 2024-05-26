import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"figmaSVG"}/>
                <Skill iconId={"htmlSVG"}/>
                <Skill iconId={"cssSVG"}/>
                <Skill iconId={"sassSVG"}/>
                <Skill iconId={"reactSVG"}/>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #f6c6cd;
    min-height: 100vh;
    
`