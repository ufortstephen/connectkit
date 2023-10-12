import "./polyfills";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "ConnectKit Vite Demo",
    alchemyId: process.env.ALCHEMY_ID,
    //infuraId: process.env.INFURA_ID,
    chains: [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum]
  })
);

const element = document.getElementById("root");
const root = createRoot(element!);

root.render(
  <StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="auto">
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </StrictMode>
);
