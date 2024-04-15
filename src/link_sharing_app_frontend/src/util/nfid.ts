import { AuthClient } from "@dfinity/auth-client";

export async function connectToNFID() {
  const authClient = await AuthClient.create();

  const APP_NAME = "Link Sharing App";
  const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
  const CONFIG_QUERY = `?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;
  const identityProvider = `https://nfid.one/authenticate${CONFIG_QUERY}`;

  await new Promise((resolve) => {
    authClient.login({
      identityProvider,
      onSuccess: resolve,
    });
  });

  return authClient;
}
