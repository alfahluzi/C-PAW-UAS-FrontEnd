import { Route, Routes } from "react-router-dom";
import Dashboard from "./page/admin/Dashboard";
import ManageCategory from "./page/admin/ManageCategory";
import Product from "./page/admin/Product";
import "./style/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/administration" element={<Dashboard />} />
        <Route path="/administration-product" element={<Product />} />
        <Route
          path="/administration-product-category"
          element={<ManageCategory />}
        />
      </Routes>
    </div>
  );
}

export default App;
