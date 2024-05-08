import React from 'react';
import {IoEnterOutline, IoExitOutline} from "react-icons/io5";
import ButtonIcon from "../../ui/ButtonIcon";


function Logout() {

    const isAuthenticated = true;

    return (
        <ButtonIcon>
            {isAuthenticated ? <IoExitOutline/> : <IoEnterOutline/>}
        </ButtonIcon>
    );
}

export default Logout;