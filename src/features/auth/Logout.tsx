import React from 'react';
import {IoEnterOutline, IoExitOutline} from "react-icons/io5";
import ButtonIcon from "../../ui/ButtonIcon";


function Logout() {

    // TODO: Replace with actual authentication check
    const isAuthenticated = true;

    return (
        <ButtonIcon>
            {isAuthenticated ? <IoExitOutline/> : <IoEnterOutline/>}
        </ButtonIcon>
    );
}

export default Logout;