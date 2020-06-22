import React from 'react';
import { 
    HeaderMenuWrapper, 
    HeaderMenu, 
} from '../styles/HeaderStyles';

export const Header = () => {
    return (
        <HeaderMenuWrapper>
            <HeaderMenu style={{width: 100}}>Comments</HeaderMenu>
            <HeaderMenu style={{width: 100}}>Vote Count</HeaderMenu>
            <HeaderMenu style={{width: 100}}>Upvote</HeaderMenu>
            <HeaderMenu style={{width: 100}}>News Details</HeaderMenu>
        </HeaderMenuWrapper>
    )
}