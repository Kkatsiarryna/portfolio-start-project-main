import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Social = () => {
    return (
        <StyledSocial>
            <Title>Let’s<br/>Connect</Title>
            <SocoalListWrapper>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"dribbleSVG"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>

                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"githubSVG"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>

                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"linkedinSVG"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>

                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"upworks2SVG"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>

                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"youtubeSVG"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
            </SocoalListWrapper>

        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    font-family: "Poppins", sans-serif;;
    font-weight: 700;
    font-size: 100px;
    padding-bottom: 30px;
`
const SocoalListWrapper = styled.div`
    display: flex;
`
const SocialList = styled.ul`
    &+&{
        margin-left: 50px;
    }
`
const SocialItem = styled.li`

`

const SocialIconLink = styled.a`

`