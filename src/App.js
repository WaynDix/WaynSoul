import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
