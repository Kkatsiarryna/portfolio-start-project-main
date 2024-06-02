import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Contact} from "./contact/Contact";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <Contact/>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
    min-height: 50vh;
    background-color: #dff6c6;

`


