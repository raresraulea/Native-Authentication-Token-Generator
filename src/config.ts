import { NativeAuthClient } from "./native.auth.client";

export const origin = 'http://localhost:3000';
export const address = "erd19rh30cq9964an8vj7qnj7gwaus90nv6020vxpu69ramwrn8yr78smteycl";
export const client = new NativeAuthClient({
    origin,
    expirySeconds: 7 * 24 * 60 * 60,
});
