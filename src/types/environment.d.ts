declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VERBOSE: boolean;
    }
  }
}

export {};
