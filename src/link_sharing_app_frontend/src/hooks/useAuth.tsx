import { AuthClient } from "@dfinity/auth-client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  canisterId,
  createActor,
} from "../../../declarations/link_sharing_app_backend";
import { Actor, Identity, IdentityDescriptor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

const AuthContext = createContext({
  isAuthenticated: false,
  loginWithNFID: () => {},
  loginWithInternetIdentity: () => {},
  logout: () => {},
  userActor: {},
} as any);

export function useAuthClient() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [identity, setIdentity] = useState<unknown | null>(null);
  const [principal, setPrincipal] = useState<unknown | null>(null);
  const [userActor, setUserActor] = useState<unknown | null>(null);

  useEffect(() => {
    AuthClient.create().then(async (client) => {
      updateClient(client);
    });
  });

  async function loginWithNFID() {
    const APP_NAME = "Link Sharing App";
    const APP_LOGO = "https://nfid.one/icons/favicon-96x96.png";
    const CONFIG_QUERY = `?applicationName=${APP_NAME}&applicationLogo=${APP_LOGO}`;
    const identityProvider = `https://nfid.one/authenticate${CONFIG_QUERY}`;

    if (authClient) {
      await new Promise((resolve) => {
        authClient.login({
          identityProvider,
          onSuccess: resolve,
        });
      });
      await updateClient(authClient);
    }
  }

  async function loginWithInternetIdentity() {
    if (authClient) {
      await new Promise((resolve) => {
        authClient.login({
          onSuccess: resolve,
        });
      });
      await updateClient(authClient);
    }
  }

  async function logout() {
    await authClient?.logout();
    if (authClient) {
      await updateClient(authClient);
    }
  }

  async function updateClient(client: AuthClient) {
    const isAuthenticated = await client.isAuthenticated();
    setIsAuthenticated(isAuthenticated);

    const identity = client.getIdentity();
    setIdentity(identity);

    const principal = identity.getPrincipal();
    setPrincipal(principal);

    setAuthClient(client);

    const actor = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });
    setUserActor(actor);
  }

  return {
    isAuthenticated,
    loginWithNFID,
    loginWithInternetIdentity,
    logout,
    userActor,
    principal,
  };
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthClient();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
