import { auth, signIn, signOut } from "@/libs/auth";

export default async function SignIn() {
  const session = await auth();

  return (
    <form
      action={async () => {
        "use server";
        if (!session) await signIn("github");
        else await signOut();
      }}
    >
      <button type="submit">
        {session ? "Signout" : "Signin with GitHub"}
      </button>
    </form>
  );
}
