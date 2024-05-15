import {ApolloClient_URL, ACCESS_TOKEN_KEY} from "../types/globalVariables";
import {jwtDecode} from "jwt-decode";
import {JwtClaims, User} from "../types/types";

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function logout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export async function login(username: string, password: string): Promise<User | null> {
    try {
        const response = await fetch(`${ApolloClient_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            return null;
        }

        const { token } = await response.json();
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
        return getUserFromToken(token);
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while logging in');
    }
}

function getUserFromToken(token: string): User {
    const claims = jwtDecode<JwtClaims>(token);
    return {
        id: claims.id,
        username: claims.username,
        role: claims.role,
    };
}