import { NativeAuthClient } from "./native.auth.client";
import { client, address } from './config';

void (async () => {
    const init = await client.initialize();
    const unsignedMessage = `${address}${init}`;

    console.log("Sign this message using utils.multiversx.com:\n", unsignedMessage);
})();

