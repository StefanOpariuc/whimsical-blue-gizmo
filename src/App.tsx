import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { apechain } from './config/chains';

const config = createConfig({
  chains: [apechain],
  transports: {
    [apechain.id]: http(),
  },
  ssr: false,
  ...getDefaultConfig({
    appName: 'Gizmo Cat',
    projectId: 'YOUR_PROJECT_ID',
  }),
});

const queryClient = new QueryClient();

const App = () => (
  <WagmiProvider config={config}>
    <RainbowKitProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </RainbowKitProvider>
  </WagmiProvider>
);

export default App;