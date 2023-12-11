import { Link, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";


function App() {
  return (
    <div >
      <div style={{display: "flex", gap: '20px'}}>
        <Link to={'/products/all'}><h2>All products</h2></Link>
        <Link to={'/products/sales'}><h2>All sales</h2></Link>
        <Link to={'/category/1'}><h2>Categories 1</h2></Link>
        <Link to={'/category/2'}><h2>Categories 2</h2></Link>
        <Link to={'/category/3'}><h2>Categories 3</h2></Link>
        <Link to={'/category/4'}><h2>Categories 4</h2></Link>
        <Link to={'/category/5'}><h2>Categories 5</h2></Link>
      </div>
      <div>
        <Routes>
          <Route path="/products/all" element={<ProductListPage type='all'/>}/>
          <Route path="/products/sales" element={<ProductListPage type='sale'/>}/>
          <Route path="/category/:id" element={<ProductListPage type='categories'/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
