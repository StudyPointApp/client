import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {
    IoBarChartOutline,
    IoCloudUploadOutline,
    IoConstructOutline,
    IoDocumentTextOutline,
    IoHomeOutline, IoPeopleOutline, IoTrophyOutline,
} from "react-icons/io5";

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-grey-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }

    /* This works because react-router places the active class on the active NavLink */

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-grey-800);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }
`;

const MainNav = () => {

    const role = 'admin';

    const adminLinks = (
        <NavList>
            <li><StyledNavLink to="/dashboard"><IoHomeOutline/><span>Home</span></StyledNavLink></li>
            <li><StyledNavLink to="/users"><IoPeopleOutline /><span>Users</span></StyledNavLink></li>
            <li><StyledNavLink to="/review"><IoDocumentTextOutline/><span>Review</span></StyledNavLink></li>
            <li><StyledNavLink to="/upload"><IoCloudUploadOutline/><span>Upload</span></StyledNavLink></li>
            <li><StyledNavLink to="/settings"><IoConstructOutline/><span>Settings</span></StyledNavLink></li>
        </NavList>
    );

    const userLinks = (
        <NavList>
            <li><StyledNavLink to="/dashboard"><IoHomeOutline/><span>Home</span></StyledNavLink></li>
            <li><StyledNavLink to="/activity"><IoTrophyOutline /><span>Activity</span></StyledNavLink></li>
            <li><StyledNavLink to="/status"><IoBarChartOutline /><span>Status</span></StyledNavLink></li>
            <li><StyledNavLink to="/settings"><IoConstructOutline/><span>Settings</span></StyledNavLink></li>
        </NavList>
    );

    return role === 'admin' ? adminLinks : userLinks;

}

export default MainNav;
