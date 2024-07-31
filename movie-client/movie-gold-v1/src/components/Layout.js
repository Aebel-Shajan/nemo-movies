import { Outlet } from "react-router-dom";
import React from 'react';

/**
 * @component 
 * @description This component renders an outlet within main to display the routes.
 * @returns {JSX.Element} - The rendered Layout component.
 */
const Layout = () => {
    return (
        <main>
            <Outlet/>
        </main>
    )
}

export default Layout
