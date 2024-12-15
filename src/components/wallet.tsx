import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { bscTestnet, avalancheFuji } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
 
const wagmiConfig = createConfig({
  chains: [bscTestnet, avalancheFuji],
  connectors: [
    coinbaseWallet({
      appName: 'solarps',
    }),
  ],
  ssr: true,
  transports: {
    [bscTestnet.id]: http(),
    [avalancheFuji.id]: http(),
  },
});
 
export function wallet({ children }: { children: ReactNode }) {
  return <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>;
}