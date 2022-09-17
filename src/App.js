// import './App.css';
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AuthPage from "./page/AuthPage";
import HomePage from "./page/HomePage";
import ProductDetails from "./page/ProductDetails";
import SearchResultPage from "./page/SearchResultPage";
import SingleBrandsProducts from "./page/SingleBrandsProducts";
import SingleCategoryProducts from "./page/SingleCategoryProducts";
import { domain, getheader } from "./env";
import { useStateValue } from "./state/stateProvider";
import OrderPage from "./page/OrderPage";
import ProfilePage from "./page/ProfilePage";

function App() {
  const [{ profile }, dispatch] = useStateValue();

  useEffect(() => {
    const getprofile = async () => {
      await axios({
        url: `${domain}/api/profile/`,
        method: "GET",
        headers: getheader,
      })
        .then((response) => {
          console.log("App=====", response.data);
          dispatch({
            type: "PRO",
            value: response.data,
          });
        })
        .catch((_) => {
          dispatch({
            type: "PRO",
            value: null,
          });
        });
    };
    getprofile();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/category-:title-:id"
          element={<SingleCategoryProducts />}
        />
        <Route path="/brand-:title-:id" element={<SingleBrandsProducts />} />
        <Route path="/p-:title-:id" element={<ProductDetails />} />
        <Route path="/q-:q" element={<SearchResultPage />} />
        <Route path="/login" element={<AuthPage />} />
        {profile !== null && (
          <>
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/profile-:username" element={<ProfilePage />} />
          </>
        )}
        <Route element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
