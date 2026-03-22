export interface IAuthErrorMessages {
  "auth/invalid-email": string;
  "auth/missing-password": string;
  "auth/invalid-credential": string;
  "auth/email-already-in-use": string;
  "auth/missing-email": string;
  "auth/weak-password": string;
  "auth/wrong-repeated-password": string;
}

export const authErrorMessages: IAuthErrorMessages = {
  "auth/invalid-email": "Your e-mail is not valid.",
  "auth/missing-password": "Password field can't be empty.",
  "auth/invalid-credential": "Can't find account of given credentials",
  "auth/email-already-in-use": "The provided email is already in use by an existing user.",
  "auth/missing-email": "E-mail field can't be empty.",
  "auth/weak-password": "Password should be at least 6 characters",
  "auth/wrong-repeated-password": "Your password doesn't match with repeated password",
};
