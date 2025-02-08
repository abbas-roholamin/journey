export type Error = {
  status: "error";
  email: string;
  password: string;
};

export async function signup(prevState: FormData, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const error: Error = {
    status: "error",
    email: "",
    password: "",
  };

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!data.email) error.email = "Email is required";
  if (!data.password) error.password = "Pasword is required";

  if (error.email != "" || error.password != "")
    return { type: "error", ...error };

  return {
    type: "success",
    message: "Form submitted successfully",
    ...data,
  };
}
