import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

export const Social = () => {
    return (
        <StyledSocial>
            <Title>Let’s Connect</Title>
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



        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    display: flex;
    background-color: #bee4fd;
`

const Title = styled.span`

`
const SocialList = styled.ul`

`
const SocialItem = styled.li`

`

const SocialIconLink = styled.a`

`