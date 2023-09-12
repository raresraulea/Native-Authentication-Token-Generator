
// This is TypeScript tool that helps generating Native Authentication access tokens

1. Make the configuration in src/config.ts.
   1. Enter your origin
   2. Enter your wallet address
   3. Enter your expected Time To Live of the Native Auth Access tokens ( defaults to 7 days)

2. Generate a message and copy it by running:
   npx ts-node src/generateUnsignedMessage.ts

==> This will output something like this:

    Sign this message using utils.multiversx.com:
    erd19rh30cq9964an8vj7qnj7gwaus90nv6020vxpu69ramwrn8yr78smteyclaHR0cDovL2xvY2FsaG9zdDozMDAw.b1f6c7b8278c5c15d1e090da4b463450bdbf302f9734ed407f29a961903110fe.604800.e30

3. Sign the provided message by using utils.multiversx.com's signing tool.
4. Enter the signature in src/generateAccessToken.ts and run:
  npx ts-node src/generateAccessToken.ts
  
==> This will output something like this:

This is your access token (available 7 days):
 ZXJkMTlyaDMwY3E5OTY0YW44dmo3cW5qN2d3YXVzOTBudjYwMjB2eHB1NjlyYW13cm44eXI3OHNtdGV5Y2w.YUhSMGNEb3ZMMnh2WTJGc2FHOXpkRG96TURBdy5mNDYwNTM1MTc0MTZhYjYzZTNmNDcxMjE2OGMxOTY2YzFkMjMxYTdkMWNjNjQyNzhlMGNmYTIxM2IwNzU0MjUyLjYwNDgwMC5lMzA.7329f06b26c1fe3b96c739160447a25c174b6096bcdde44d55ff602e2e20c643bdfaebfb62d4b2579b80e64d7e18670e775fa270d4c1e19c3b561980c0000f08
