import { AuthClient } from "@dfinity/auth-client";
export async function connectToInternetIdentity() {
  const authClient = await AuthClient.create();

  await new Promise((resolve) => {
    authClient.login({
      onSuccess: resolve,
    });
  });

  return authClient;
}
