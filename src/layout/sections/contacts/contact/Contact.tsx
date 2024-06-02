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
    gap: 20px;
`

const FieldTitle = styled.span`

`

const Field = styled.input`
`