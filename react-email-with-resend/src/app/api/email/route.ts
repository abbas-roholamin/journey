import Welcome from "@/app/email/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name } = await request.json();

  console.log(name);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "abbasroholamin76@gmail.com",
    subject: "Hello World",
    react: Welcome({ name }),
  });

  return new Response("Email sent");
}
