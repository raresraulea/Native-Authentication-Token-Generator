import { address } from './config';
import * as promptSync from 'prompt-sync';
import { CustomNativeAuthClient } from './custom.native.auth.client';
const emojic = require('emojic');

const colors = require('colors');
colors.enable();

void (async () => {
   
    const { clientInstance, init } = await CustomNativeAuthClient.build();

    console.log(("🟡 Building Signable message..." as any).yellow);
    const unsignedMessage = `${address}${init}`;

    console.log("✅ Build was successful! Please sign the following message using utils.multiversx.com:\n", (unsignedMessage as any).blue);
    
    if (!clientInstance || CustomNativeAuthClient.getInit() === '' || !CustomNativeAuthClient.getInit()) {
        console.log(emojic.thumbsUp + ("There was a problem with the Native Auth Client: " as any).green, {
            clientInstance,
            init: CustomNativeAuthClient.getInit(),
        });
        return;
    }

    const prompt = promptSync();
    const signedMessageFromUtilsMvx = prompt("\n Paste the signed message here: ");

    console.log(("🟡 Generating Access Token..." as any).yellow);

    const accessToken = clientInstance.getToken(
        address,
        CustomNativeAuthClient.getInit(),
        signedMessageFromUtilsMvx
    );
    
    console.log(("✅ Generated token successfully! This is your access token:\n" as any).green + (accessToken as any).blue);
})();

