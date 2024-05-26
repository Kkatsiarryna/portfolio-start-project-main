import React from 'react';
import photo from '../../../assets/images/zarror.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify="space-around">
                <div>
                    <span>Hello! I’m Zarror Nibors</span>
                    <Name>I’am freelance <MainTitle>web developer</MainTitle> based in Indonesia who loves to craft attractive design experiences for the web.</Name>
                    <button>Email me</button>
                    <span>Download CV</span>
                </div>
                <Photo src={photo} alt="web developer"/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: bisque;
`


const Photo = styled.img`
    width: 721px;
    height: 743px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`
const Name = styled.h2`

`