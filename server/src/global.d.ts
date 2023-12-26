declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT : number,
        MONGODB_URL : string,
        COOKIE_SECRET : string,
      }
    }
  }
  export {};