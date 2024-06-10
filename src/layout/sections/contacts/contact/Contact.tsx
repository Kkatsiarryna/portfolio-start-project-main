import React from 'react';
import styled from "styled-components";
import {Send} from "../send/Send";

export const Contact = () => {
    return (
        <StyledContact>
            <StyledForm>
                <FieldTitle>Your name:</FieldTitle>
                <Field/>
                <FieldTitle>Your email  address:</FieldTitle>
                <Field/>
                <FieldTitle>Tell about the project:</FieldTitle>
                <Field/>
                <Send/>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.div``

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const FieldTitle = styled.span`
    font-weight: 500;
    font-size: 30px;
`

const Field = styled.input`
    font-size: 38px;
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    color: inherit;
    outline: none;
    width: 100%; 
`