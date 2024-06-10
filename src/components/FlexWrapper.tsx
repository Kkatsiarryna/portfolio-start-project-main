import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    height?: string
    width?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || undefined};
    justify-content: ${props => props.justify || undefined};
    align-items: ${props => props.align || undefined};
    flex-wrap: ${props => props.wrap || "nowrap"};
    height: ${props => props.height || "100%"} ;
    width: ${props => props.width || undefined} ;
`