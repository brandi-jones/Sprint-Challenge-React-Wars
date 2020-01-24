import React from "react";
import styled from "styled-components";


const TitleDiv = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy|Monoton&display=swap');
    font-family: 'Monoton', cursive;
    text-align: center;
    margin: 2rem;
`;

const Header = () => {
    return (
        <TitleDiv>STAR WARS CHARACTERS</TitleDiv>
    );
};

export default Header;