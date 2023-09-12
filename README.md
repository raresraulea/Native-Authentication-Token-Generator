
// This is TypeScript tool that helps generating Native Authentication access tokens

1. Make the configuration in src/config.ts.
   1. Enter your origin
   2. Enter your wallet address
   3. Enter your expected Time To Live of the Native Auth Access tokens ( defaults to 7 days)

2. Generate a message and sign it by running:
   npx ts-node src/generateUnsignedMessage.ts

==> This will output something like this:
    Sign this message using utils.multiversx.com:
    erd19rh30cq9964an8vj7qnj7gwaus90nv6020vxpu69ramwrn8yr78smteyclaHR0cDovL2xvY2FsaG9zdDozMDAw.b1f6c7b8278c5c15d1e090da4b463450bdbf302f9734ed407f29a961903110fe.604800.e30
  