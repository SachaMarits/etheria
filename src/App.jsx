import { Header, Main, Footer } from "./components/sections";
import { useOpening } from "./contexts/useOpening";
import "./assets/css/theme.css";

function App() {
  const { activeSet } = useOpening();

  return (
    <div id="wrapper" className={activeSet?.className}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
