export type AppEnvironment = "development" | "staging" | "production";

const environmentVars = {
  ASSISTANTS_SERVER: process.env.NEXT_PUBLIC_ASSISTANTS_SERVER,
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV as AppEnvironment | undefined,
};

export default environmentVars;
