import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import UseCases from "./pages/UseCases";
import Agencies from "./pages/Agencies";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

// Blog
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPost from "./pages/blog/BlogPost";

// Comparar
import CompararIndex from "./pages/comparar/CompararIndex";
import CompararPage from "./pages/comparar/CompararPage";

// Industrias
import IndustriasIndex from "./pages/industrias/IndustriasIndex";
import IndustriaPage from "./pages/industrias/IndustriaPage";

// Casos de Uso
import CasosDeUsoIndex from "./pages/casos-de-uso/CasosDeUsoIndex";
import CasoDeUsoPage from "./pages/casos-de-uso/CasoDeUsoPage";

import "./i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 2, staleTime: 1000 * 60 * 5 },
    mutations: { retry: 1 },
  },
});

const App = () => (
  <HelmetProvider>
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/use-cases" element={<UseCases />} />
              <Route path="/agencies" element={<Agencies />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />

              {/* Blog */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Comparativas */}
              <Route path="/comparar" element={<CompararIndex />} />
              <Route path="/comparar/:slug" element={<CompararPage />} />

              {/* Industrias */}
              <Route path="/industrias" element={<IndustriasIndex />} />
              <Route path="/industrias/:slug" element={<IndustriaPage />} />

              {/* Casos de Uso */}
              <Route path="/casos-de-uso" element={<CasosDeUsoIndex />} />
              <Route path="/casos-de-uso/:slug" element={<CasoDeUsoPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
  </HelmetProvider>
);

export default App;
