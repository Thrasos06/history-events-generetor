import React from "react";
import BirthEventCalculatorPage from "./Components/Pages/BirthEventCalculatorPage/BirthEventCalculatorPage";
import MyGlobalStyles from "./Components/Styles/MyGlobalStyles";

class App extends React.Component {
    render() {
        return (
            <>
                <MyGlobalStyles />
                <BirthEventCalculatorPage />
            </>
        );
    }
}

export default App;
