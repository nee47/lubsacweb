"use server";
import { signIn } from "../auth";
import { redirect } from "next/navigation";

export async function authenticate(_currentState, formData) {
  let res;

  try {
    res = await signIn(
      _currentState.get("user"),
      _currentState.get("password")
    );
  } catch (error) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
  console.log(res);
  redirect("/productos");
}
