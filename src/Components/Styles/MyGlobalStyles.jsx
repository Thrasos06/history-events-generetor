import React from "react";
import { Global, css } from "@emotion/react";

function MyGlobalStyles() {
    return (
        <Global
            styles={css`
                * {
                    /* box-sizing: border-box; */
                    font-family: MyFont;
                    /* font-weight: bold; */
                    /* font-size: x-large; */
                }
            `}
        />
    );
}

export default MyGlobalStyles;
