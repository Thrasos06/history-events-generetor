import React, { useState } from "react";
import styled from "@emotion/styled";

const InputGroups = styled("div")`
    display: flex;
    min-width: 340px;
    width: 100%;
    justify-content: space-around;
    align-items: flex-end;
    border-radius: 0px;
    padding: 5px;

    & > .form-group {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        /* margin-bottom: 20px; */

        & > select {
            height: 40px;
            font-size: large;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            text-indent: 10px;
            cursor: pointer;
            /* border: 5px solid red; */
        }
    }

    & > #buttonClick {
        min-width: 100px;
        height: 38px;
        /* border-radius: 4px; */
        background-color: paleturquoise;
        background-color: #fff;
        background-color: #406060;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: large;
        font-weight: bold;
        border: 1px solid #000;
        /* border: 5px solid red; */
        transition: 0.5s;
        &:hover {
            cursor: pointer;
            background-color: #507070;
        }
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

    const ContainerForm = styled("div")({
        width: robots === "" ? "390px" : "810px",
        height: robots === "" ? "200px" : "300px",
        /* margin: auto; */
        padding: "20px",
        backgroundColor: "#fff",
        /* height: 50px; */
        /* text-align: center; */

        "& h3": {
            textAlign: "center",
        },

        "& > #theEvent": {
            fontFamily: "MyFont",
            fontSize: "x-large",
            textAlign: "center",
        },
    });

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
        fetch(`http://numbersapi.com/${activeMonth + 1}/${activeDay + 1}/date`)
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
                <h3>Enter Your Birth Date!</h3>
                <InputGroups>
                    {renderInputs(activeDay, activeMonth, changeValue)}
                    <a
                        className="form-group"
                        id="buttonClick"
                        value="Send"
                        onClick={publish}
                        href
                    >
                        {robots === "" ? "Lets Learn!" : "Find Another!"}
                    </a>
                </InputGroups>
                <div id="theEvent">
                    <p>{robots}</p>
                </div>
            </ContainerForm>
        </>
    );
};

export default BirthEventCalculator;
