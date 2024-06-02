import React from 'react';
import styled from "styled-components";
import {Contacts} from "../sections/contacts/Contacts";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Social} from "../sections/social/Social";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align={"center"} justify="space-around">
            <Social/>
            <Contacts/>
            </FlexWrapper>
            <Copyright>Created by Zarror | All Reserved!</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #e8bcf6;
`

const Copyright = styled.small`

`