import React from "react";
import styled from "@emotion/styled";
import BirthEventCalculator from "./BirthEventCalculator";

const Header = styled("div")`
    width: 100%;
    height: 10vh;
    & > img {
        /* height: 30vh; */
    }
`;

const Footer = styled("footer")`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5vh;
    background-color: rgb(44, 10, 99);
    box-shadow: purple;
    color: white;
    font-family: "MyFont";
    font-weight: bold;
    /* text-align: center; */
    & #content {
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const BirthEventCalculatorPage = () => {
    return (
        <>
            <Header>
                <img src="./images/logo.png" alt="logo" />
            </Header>
            <BirthEventCalculator />
            <Footer>
                <div id="content">
                    Made for fun by
                    <a href="https://github.com/Thrasos06">Thrasos!</a>
                </div>
            </Footer>
        </>
    );
};

export default BirthEventCalculatorPage;
