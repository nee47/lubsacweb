import User from "@/db/models/user";
import { encrypt } from "./utils";
import { cookies } from "next/headers";

export const signIn = async (username, password) => {
  try {
    const userFound = await User.findOne({ where: { username } });
    //console.log(userFound);
    if (userFound.dataValues.password != password)
      throw new Error({
        error: "SOMETHING WENT WRONG ",
      });

    const encryptedSessionData = encrypt(
      JSON.stringify({ username: username })
    );

    console.log("succesfull login");

    cookies().set("session", encryptedSessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 2, //2 min
    });
  } catch (error) {
    console.log(`the error is : ${error}`);
  }
};
