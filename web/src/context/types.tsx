export type LOGINTYPES =
    { type: "login"; payload: object | null }
    | { type: "logout"; payload: object | null };

const initialState = { email: "0", password: "" }
export type LOGINSTATE = typeof initialState;