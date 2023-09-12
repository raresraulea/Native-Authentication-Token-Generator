import { address, client } from './config';

const signedMessageFromUtilsMvx = "SIGNED_MESSAGE_GOES_HERE";

void (async () => {
    const init = await client.initialize();
    const accessToken = client.getToken(address, init, signedMessageFromUtilsMvx);
    
    console.log("This is your access token:\n", accessToken);
})();

