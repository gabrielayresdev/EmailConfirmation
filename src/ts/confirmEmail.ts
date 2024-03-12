import getToken from "./getToken";

export default async function confirmEmail() {
  const token = getToken();
  try {
    const options = {
      body: JSON.stringify({ token: token }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };
    const response = await fetch(`http://localhost:3333/confirm`, options);
    console.log(options);
    if (!response.ok) throw new Error("Something went wrong!");
    else console.log("Email confirmed");
  } catch (error) {
    console.log(error);
  }
}
