import { NativeAuthClient } from "./native.auth.client";
import { apiUrl, origin } from "./config";
const emojic = require('emojic');
const colors = require('colors');
colors.enable();

export class CustomNativeAuthClient {
  private static instance: NativeAuthClient | null = null;
  private static init: string = '';

  constructor() {
    return this;
  }

  static getInstance() {
    return CustomNativeAuthClient.instance;
  }

  static getInit() {
    return CustomNativeAuthClient.init;
  }

  static async build() {
    console.log(("🟡 Building Custom Native Auth Client..." as any).yellow);
    if (!CustomNativeAuthClient.instance) {
      CustomNativeAuthClient.instance = new NativeAuthClient({
          apiUrl,
          origin,
          expirySeconds: 24 * 60 * 60,
      });

      console.log(("✅ Native Auth Client Instance created... 👍" as any).green);
    }

    CustomNativeAuthClient.init = await CustomNativeAuthClient.instance?.initialize() ?? '';
    console.log(("✅ Native Auth Client Init String created... 👍 \n" as any).green);
    
    return {
      clientInstance: CustomNativeAuthClient.instance,
      init: CustomNativeAuthClient.init,
    };
  }
}
