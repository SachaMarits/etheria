import { OpeningContextProvider } from "./contexts/useOpening";
import { Header, Main, Footer } from "./components/sections";

function App() {
  return (
    <OpeningContextProvider>
      <Header />
      <Main />
      <Footer />
    </OpeningContextProvider>
  );
}

export default App;
