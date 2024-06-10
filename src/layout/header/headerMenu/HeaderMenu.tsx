import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";



export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        padding: 10px;
        gap: 40px;
        height: 50px;
    }
`

const ListItem = styled.li`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${theme.colors.font};
`

const Link = styled.a`
`