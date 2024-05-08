import React, {useEffect} from 'react';
import Spinner from "../../ui/Spinner";
import {useNavigate} from "react-router-dom";

function ProtectedRoute({children}: {children: React.ReactNode}) {
    const navigate = useNavigate();

    // 1. Load the authenticated user
    const isAuthenticated = true;
    const isLoading = false;

    // 2. If the user is not authenticated, redirect to the login page
    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            navigate('/login');
        }
    }, [isAuthenticated, isLoading, navigate]);

    // 3. While loading the user, show a loading spinner
    if(isLoading) return (<Spinner/>);

    // 4. If the user is authenticated, render the children

    if(isAuthenticated) return <>{children}</>;
}
export default ProtectedRoute;