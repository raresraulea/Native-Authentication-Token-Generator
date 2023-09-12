import { NativeAuthClient } from "./native.auth.client";

export const origin = 'https://localhost:3000';
export const address = "erd1...";
export const client = new NativeAuthClient({
    origin,
    expirySeconds: 7 * 24 * 60 * 60,
});
