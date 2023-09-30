import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Nabvar";
import { CartProvider } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Todos los productos"} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting={"Productos por Categoria"} />}
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
