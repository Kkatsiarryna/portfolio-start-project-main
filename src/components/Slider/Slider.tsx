import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import photo from '../../assets/images/man.webp'

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Image src={photo} alt=""/>
                    <Quote>``</Quote>
                    <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent</StyledText>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <Icon iconId={"arrowLeftSVG"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                <Icon iconId={"arrowRightSVG"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    border: 1px solid #538b00;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    
    text-align: center;
`


const Image = styled.img`
`

const StyledText = styled.p``

const Quote = styled.h2`
    font-weight: 700;
    font-size: 100px;
`

const Pagination = styled.div`
    display: inline-block;
`