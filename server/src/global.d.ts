declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGODB_URL: string;
      COOKIE_SECRET: string;
      CLIENT_URL: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GOOGLE_CALLBACK_URL: string;
      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;
      GITHUB_CALLBACK_URL: string;
      MICROSOFT_CLIENT_ID: string;
      MICROSOFT_CLIENT_SECRET: string;
      MICROSOFT_CALLBACK_URL: string;
      JWT_SECRET_KEY : string,
      SESSION_SECRET : string
    }
  }
}
export {};
