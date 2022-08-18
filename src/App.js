import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </ProductContextProvider>
    </>
  );
}

export default App;
