import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../FlexWrapper";
import photo from '../../assets/images/man.webp'
import {Testimony} from "../../layout/sections/testimony/Testimony";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper >

                    <Image src={photo} alt=""/>
                    <TestimonyWrapper>
                        <Quote>“</Quote>
                        <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent </StyledText>
                        <Pagination>
                            <Icon iconId={"arrowLeftSVG"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                            <Icon iconId={"arrowRightSVG"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                        </Pagination>
                    </TestimonyWrapper>
            </FlexWrapper>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 900px;
    //border: 1px solid #538b00;
    display: flex;
    
`

const TestimonyWrapper = styled.div`
    margin-left: 12px;
`

const Image = styled.img`
    width: 390px;
    height: 85%;
    //object-fit: contain;
`

const StyledText = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 180%;
    margin-top: -40px;
    
`

const Quote = styled.h3`
    font-weight: 700;
    font-size: 100px;
    color: ${theme.colors.secondAccent};
    //line-height: 1;
`

const Pagination = styled.div`
    display: inline-block;
    margin-top: 20px;
    margin-left: 12px;
`