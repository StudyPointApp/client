import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        /* Indigo */
        --color-brand-50: #eef2ff;
        --color-brand-100: #e0e7ff;
        --color-brand-200: #c7d2fe;
        --color-brand-500: #6366f1;
        --color-brand-600: #4f46e5;
        --color-brand-700: #4338ca;
        --color-brand-800: #3730a3;
        --color-brand-900: #312e81;

        /* Grey */
        --color-grey-0: #fff;
        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #4b5563;
        --color-grey-700: #374151;
        --color-grey-800: #1f2937;
        --color-grey-900: #111827;

        /* Blue */
        --color-blue-100: #e0f2fe;
        --color-blue-700: #0369a1;

        /* Green */
        --color-green-400: #4ade80;
        --color-green-600: #16a34a;
        --color-green-800: #166534;

        /* Red */
        --color-red-100: #fee2e2;
        --color-red-500: #ef4444;
        --color-red-700: #b91c1c;
        --color-red-900: #7f1d1d;

        /* Shadow */
        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        /* Border radius */
        --border-radius-tiny: 3px;
        --border-radius-sm: 5px;
        --border-radius-md: 7px;
        --border-radius-lg: 9px;

    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%; /* Set the base font size to 10px */
    }

    /*
    1. The first part \`*, *::before, *::after\` targets all elements, their before and after pseudo-elements. It's a 
    universal selector. It's used to ensure that all elements, including before and after pseudo-elements, have the 
    same box-sizing and transition properties.
    
    2. \`box-sizing: border-box;\` changes the default CSS box model to include the padding and border in the element's 
    total width and height. This makes it easier to size elements. 
    
    3. \`html { font-size: 62.5%; }\` sets the base font size for the document to 62.5% of the default font size. 
    This is often used to make the math for rem units easier (1 rem = 10px). So, this line sets 1rem to 10 pixels. 
    It's a way of standardizing the font sizes across different browsers.
     */

    body {
        font-family: "Poppins", sans-serif; /* Fonts can be changed */
        color: var(--color-grey-700);

        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        line-height: 1.5;
        font-size: 1.6rem;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    select:disabled,
    input:disabled {
        background-color: var(--color-grey-200);
        color: var(--color-grey-500);
    }

    input:focus,
    button:focus,
    textarea:focus,
    select:focus {
        outline: 2px solid var(--color-brand-600);
        outline-offset: -1px;
    }

    button:has(svg) {
        line-height: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }

    /*
    1. \`overflow-wrap: break-word;\`: This property specifies whether or not the browser may break lines 
    within words in order to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box. 
    
    2. \`hyphens: auto;\`: This property controls when words can be split by the hyphenation process. "auto" allows the 
    browser to automatically hyphenate words when necessary to prevent overflow.
    
     */

    img {
        max-width: 100%;
    }
`

export default GlobalStyles;