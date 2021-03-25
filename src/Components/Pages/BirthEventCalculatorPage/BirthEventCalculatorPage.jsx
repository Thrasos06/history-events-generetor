import React from "react";
import styled from "@emotion/styled";
import BirthEventCalculator from "./BirthEventCalculator";

const Header = styled("div")`
    width: 100%;
    max-height: 30vh;
    text-align: center;
    background-color: #303841;
    /* height: 10vh; */
    & > img {
        /* height: 30vh; */
        max-width: inherit;
        max-height: inherit;
        /* margin: 0 auto; */
    }
`;

const Footer = styled("footer")`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6vh;
    background-color: rgb(44, 10, 99);
    background-color: #303841;
    box-shadow: purple;
    color: white;
    font-weight: bold;
    /* text-align: center; */
    & #content {
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        & a {
            text-decoration: none;
            color: red;
        }
    }
`;

const BirthEventCalculatorWrapper = styled("div")({
    // backgroundColor: "#345",
    backgroundImage: "linear-gradient(#303841,#406060)",

    // width: "100%",
    height: "60vh",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const BirthEventCalculatorPage = () => {
    return (
        <>
            <Header>
                <img src="./images/logo-mini.png" alt="logo" />
            </Header>
            <BirthEventCalculatorWrapper>
                <BirthEventCalculator />
            </BirthEventCalculatorWrapper>
            <Footer>
                <div id="content">
                    <p>
                        Made for fun by&nbsp;
                        <a href="https://github.com/Thrasos06">Thrasos!</a>
                    </p>
                </div>
            </Footer>
        </>
    );
};

export default BirthEventCalculatorPage;
