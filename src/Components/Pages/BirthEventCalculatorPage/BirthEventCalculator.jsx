import React, { useState } from "react";
import styled from "@emotion/styled";

const ContainerForm = styled("div")`
    width: 50%;
    margin: auto;
    /* height: 50px; */
    text-align: center;

    & > .inputForm {
        width: 18%;
        height: 100%;
        font-size: large;
        font-weight: bold;
    }

    & > #buttonClick {
        margin-top: 20px;
        width: 150px;
        height: 60px;
        border-radius: 4px;
        background-color: paleturquoise;
        font-family: "MyFont";
        font-weight: bold;
        font-size: x-large;
    }

    & > #theEvent {
        font-family: "MyFont";
        font-size: x-large;
    }
`;

const BirthEventCalculator = () => {
    const setNewDaysArray = (maxDays) => {
        let newArray = new Array();
        for (let i = 1; i <= maxDays; i++) {
            newArray.push(i);
        }
        return newArray;
    };

    const [activeMonth, setActiveMonth] = useState(0);
    const [activeDay, setActiveDay] = useState(0);
    const [robots, setRobots] = useState("");
    const [daysList, setDaysList] = useState(setNewDaysArray(31));

    const inputList = [
        {
            name: "Month",
            maxValue: "12",
        },
        {
            name: "Day",
            maxValue: "31",
        },
    ];

    const monthsList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const publish = () => {
        fetch(`http://numbersapi.com/${activeMonth}/${activeDay}/date`)
            .then((response) => response.text())
            .then((text) => setRobots(text));

        // window.open(`http://numbersapi.com/${this.state.month}/${this.state.day}/date`);
        // this.Brings();
    };

    const createNewdaysList = (maxDays = 30) => {
        let newArray = new Array();
        for (let i = 0; i < maxDays; i++) {
            newArray.push(i + 1);
        }
        console.log(newArray);
        setDaysList(newArray);
        return newArray;
    };

    const setNewDaysListForSelectedMonth = (target) => {
        let maxDays = 0;
        let targetMonthNum = parseInt(target.value) + 1;
        targetMonthNum <= 7
            ? targetMonthNum % 2 === 0
                ? targetMonthNum === 2
                    ? (maxDays = 28)
                    : (maxDays = 30)
                : (maxDays = 31)
            : targetMonthNum % 2 === 0
            ? (maxDays = 31)
            : (maxDays = 30);
        createNewdaysList(maxDays);
    };

    const changeValue = ({ target }) => {
        switch (target.name) {
            case "Month":
                setActiveMonth(parseInt(target.value));
                setNewDaysListForSelectedMonth(target);
                setActiveDay(0);
                return null;
            case "Day":
                setActiveDay(parseInt(target.value));
                return null;
            default:
                return null;
        }
    };

    const renderOptions = (item) => {
        let listToRender = item === "Month" ? "monthsList" : "daysList";
        listToRender = eval(listToRender);
        console.log("listToRender", listToRender);
        return listToRender.map((item, key) => (
            <option key={key} value={key}>
                {listToRender[key]}
            </option>
        ));
    };

    const renderInputs = () => {
        return (
            <>
                {inputList.map((input, key) => {
                    return (
                        <div className="form-group" key={input.name}>
                            <label htmlFor={input.name}>{input.name}</label>
                            <select
                                name={input.name}
                                id={input.name}
                                className="inputForm"
                                value={
                                    input.name === "Month"
                                        ? activeMonth
                                        : activeDay
                                }
                                onChange={changeValue}
                            >
                                {renderOptions(input.name)}
                            </select>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <>
            <ContainerForm>
                <h1>Enter Your Birth Date!</h1>
                {renderInputs(activeDay, activeMonth, changeValue)}
                <button id="buttonClick" value="Send" onClick={publish}>
                    Lets Learn!
                </button>
                <div id="theEvent">
                    <p>{robots}</p>
                </div>
            </ContainerForm>
        </>
    );
};

export default BirthEventCalculator;
