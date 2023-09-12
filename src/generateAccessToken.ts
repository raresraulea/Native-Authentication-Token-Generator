import { address, client } from './config';

const signedMessageFromUtilsMvx = "7329f06b26c1fe3b96c739160447a25c174b6096bcdde44d55ff602e2e20c643bdfaebfb62d4b2579b80e64d7e18670e775fa270d4c1e19c3b561980c0000f08";

void (async () => {
    const init = await client.initialize();
    const accessToken = client.getToken(address, init, signedMessageFromUtilsMvx);
    
    console.log("This is your access token:\n", accessToken);
})();

