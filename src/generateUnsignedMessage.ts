import { NativeAuthClient } from "./native.auth.client";
import { client, address } from './config';

void (async () => {
    const init = await client.initialize();
    const unsignedMessage = `${address}${init}`;

    console.log("Sign the following message using utils.multiversx.com:\n", unsignedMessage);
})();

