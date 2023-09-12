# Native Authentication Access Token Generator

The Native Authentication Access Token Generator is a TypeScript tool that simplifies the process of generating Native Authentication access tokens. This tool streamlines the configuration and token generation process, allowing you to quickly and securely obtain access tokens for your applications.

## Table of Contents

- [Native Authentication Access Token Generator](#native-authentication-access-token-generator)
  - [Table of Contents](#table-of-contents)
  - [1. Configuration](#1-configuration)
  - [2. Generate Access Token](#2-generate-access-token)
  - [Security Note](#security-note)

Follow the steps below to configure and use this tool effectively.

## 1. Configuration

Open the `src/config.ts` file and provide the necessary configuration details:

- Set your origin
- Enter your wallet address
- Define the expected Time To Live (TTL) for the Native Auth Access tokens (defaults to 24 hours).

```typescript
export const origin = 'https://localhost:3000';
export const address = "erd1...";
export const client = new NativeAuthClient({
    origin,
    expirySeconds: 7 * 24 * 60 * 60, // Set your preferred TTL in seconds
});
```

## 2. Generate Access Token

To generate an access token along with the signable message, run the following command:

```shell
npx ts-node src/generateAccessToken.ts
```

This command will produce output and prompt you to paste the signed message in the console. The output will look something like this:

```
🟡 Building Custom Native Auth Client...
✅ Native Auth Client Instance created... 👍
✅ Native Auth Client Init String created... 👍 

🟡 Building Signable message...
✅ Build was successful! Please sign the following message using utils.multiversx.com:
 erd19rh30cq9964an8vj7qnj7gwaus90nv6020vxpu69ramwrn8yr78smteyclaHR0cHM6Ly9kZXZuZXQtYXBpLmluc3BpcjMuaW8.6b2f7f6a0937d2faaac46978a2db34c36d9794b5884bdce50238ede9f43f8416.86400.e30

 Paste the signed message here: 
```

Paste the signed message obtained from your signing provider in the console. After pasting the message, the tool will generate your access token, and the output will look something like this:

```
🟡 Generating Access Token...
✅ Generated token successfully! This is your access token:
ZXJkMTlyaDMwY3E5OTY0YW44dmo3cW5qN2d3YXVzOTBudjYwMjB2eHB1NjlyYW13cm44eXI3OHNtdGV5Y2w.YUhSMGNITTZMeTlrWlhadVpYUXRZWEJwTG1sdWMzQnBjak11YVc4LjZiMmY3ZjZhMDkzN2QyZmFhYWM0Njk3OGEyZGIzNGMzNmQ5Nzk0YjU4ODRiZGNlNTAyMzhlZGU5ZjQzZjg0MTYuODY0MDAuZTMw.
```

Please ensure the security of your access token, as it grants access to your resources for the specified duration.

## Security Note

It is crucial to keep your access token secure and avoid sharing it with unauthorized parties. This access token provides access to your resources, so treat it with the same level of care as you would a password.

If you encounter any issues or have questions, please refer to the project's documentation or seek assistance from the project maintainers.

---

**Note:** This README provides updated instructions for using the Native Authentication Access Token Generator tool. Make sure to follow the steps carefully and paste the signed message as prompted in the console.
