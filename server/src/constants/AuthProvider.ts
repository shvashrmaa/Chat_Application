interface IAuthType {
  GOOGLE: string;
  GITHUB: string;
  EMAIL_PASSWORD: string;
  MICROSOFT: string
}

interface IAuthProvider {
  GOOGLE_PROVIDER: string;
  GITHUB_PROVIDER: string;
  EMAIL_PASSWORD_PROVIDER: string;
  MICROSOFT_PROVIDER: string;
}

const AuthLoginType: IAuthType = {
  GOOGLE: "GOOGLE",
  GITHUB: "GITHUB",
  EMAIL_PASSWORD: "PASSWPORD",
  MICROSOFT : "MICROSOFT"
};

const AuthProvider: IAuthProvider = {
  GOOGLE_PROVIDER: "GOOGLE_PROVIDER",
  GITHUB_PROVIDER: "GITHUB_PROVIDER",
  EMAIL_PASSWORD_PROVIDER: "EMAIL_PROVIDER",
  MICROSOFT_PROVIDER: "MICROSOFT_PROVIDER",
};
