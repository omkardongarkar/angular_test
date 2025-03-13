export interface LoginRequest{
    username: string
    password: string
}

export interface LoginResponse{
    status_code: number,
    status_message: string,
    access_token: string,
}



