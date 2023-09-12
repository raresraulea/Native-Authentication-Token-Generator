```markdown
# Native Authentication Access Token Generator

This TypeScript tool simplifies the process of generating Native Authentication access tokens. Follow the steps below to configure and use this tool effectively.

## Configuration

1. Open the `src/config.ts` file and provide the necessary configuration details:
   - Set your origin
   - Enter your wallet address
   - Define the expected Time To Live (TTL) for the Native Auth Access tokens (defaults to 7 days).

## Message Generation

2. Generate a message by running the following command:
   
   ```shell
   npx ts-node src/generateUnsignedMessage.ts
   ```

   This command will produce output similar to the following:

   ```
   Sign this message using utils.multiversx.com:
   erd19rh30cq9964an8vj7qnj7gwaus90nv6020vxpu69ramwrn8yr78smteyclaHR0cDovL2xvY2FsaG9zdDozMDAw.b1f6c7b8278c5c15d1e090da4b463450bdbf302f9734ed407f29a961903110fe.604800.e30
   ```

## Signature and Access Token

3. Sign the provided message using utils.multiversx.com's signing tool.
4. Enter the generated signature in the `src/generateAccessToken.ts` file.

5. Finally, run the following command to obtain your access token:

   ```shell
   npx ts-node src/generateAccessToken.ts
   ```

   The output will look something like this:

   ```
   This is your access token:
   ZXJkMTlyaDMwY3E5OTY0YW44dmo3cW5qN2d3YXVzOTBudjYwMjB2eHB1NjlyYW13cm44eXI3OHNmdGV5Y2w.YUhSMGNEb3ZMMnh2WTJGc2FHOXpkRG96TURBdy5mNDYwNTM1MTc0MTZhYjYzZTNmNDcxMjE2OGMxOTY2YzFkMjMxYTdkMWNjNjQyNzhlMGNmYTIxM2IwNzU0MjUyLjYwNDgwMC5lMzA.7329f06b26c1fe3b96c739160447a25c174b6096bcdde44d55ff602e2e20c643bdfaebfb62d4b2579b80e64d7e18670e775fa270d4c1e19c3b561980c0000f08
   ```

Please make sure to keep your access token secure, as it grants access to your resources for the specified duration.

```
