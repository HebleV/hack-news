import React from 'react';
import { HeaderMenuWrapper, HeaderMenu } from '../styles/HeaderStyles';

export const Header = () => {
    return (
        <HeaderMenuWrapper>
            <HeaderMenu>Comments</HeaderMenu>
            <HeaderMenu>Vote Count</HeaderMenu>
            <HeaderMenu>Upvote</HeaderMenu>
            <HeaderMenu>News Details</HeaderMenu>
        </HeaderMenuWrapper>
    )
}