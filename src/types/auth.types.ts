export interface AuthResponse {
    user: User;
    access_token: string;
    refresh_token: string;
}
export interface AuthResponseError {
    body: {
        error: string;
    };
}

export interface User {
    id: string;
    name: string;
    lastname: string
    avatar: string
    email: string
}

export interface AccessTokenResponse {
    access_token: string;
    token_type: string
}