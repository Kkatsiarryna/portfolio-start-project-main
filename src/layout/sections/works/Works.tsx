import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <div>
                <span>4+</span>
                <span>Years Experience Working</span>
            </div>
            <StyledWorkTitle>Developer and Designer, specialized in UI/UX and Web Developer</StyledWorkTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Work iconId={"computerSVG"} description={"Front End Developer"} />
                <Work iconId={"paintSVG"} description={"UI/UX designer"} />
                <Work iconId={"thunderSVG"} description={"Branding Designer"} />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 60vh;
    background-color: #c5e4ea;
`
const StyledWorkTitle = styled.h2`

`
