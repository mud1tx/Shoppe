import Signup from "./Components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./HomeComponents/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import Logout from "./Components/Logout/Logout";
import Products from "./Components/ProductComponent/Products";
import ProductDetail from "./Components/ProductComponent/ProductDetail";
import { FilterProvider } from "./contexts/FilterContext";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { AddressProvider } from "./contexts/AddressContext";
import { SelectedAddressProvider } from "./contexts/SelectedAddressContext";
import { OrdersProvider } from "./contexts/OrdersContext";
import CartContainer from "./Components/Cart/CartContainer";
import WishlistContainer from "./Components/Wishlist/WishlistContainer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Tester from "./Tester";
import AddressContainer from "./Components/Address/AddressContainer";
import OrderContainer from "./Components/Order/OrderContainer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <FilterProvider>
          <AuthProvider>
            <WishlistProvider>
              <CartProvider>
                <SelectedAddressProvider>
                  <AddressProvider>
                    <OrdersProvider>
                      <ToastContainer
                        newestOnTop={true}
                        toastStyle={{
                          backgroundColor: "#117314",
                          color: "white",
                          top:"4em"
                        }}
                      />
                      <Routes>
                        <Route element={<PrivateRoute />}>
                          <Route path="/" element={<Dashboard />} />
                          <Route
                            path="/update-profile"
                            element={<UpdateProfile />}
                          />
                          <Route path="/logout" element={<Logout />} />
                          <Route path="/products" element={<Products />} />
                          <Route
                            path="/products/:productId"
                            element={<ProductDetail />}
                          />
                          <Route path="/cart" element={<CartContainer />} />
                          <Route
                            path="/wishlist"
                            element={<WishlistContainer />}
                          />
                          <Route
                            path="/logout/orders"
                            element={<OrderContainer />}
                          />
                        </Route>

                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                          path="/forgot-password"
                          element={<ForgotPassword />}
                        />
                        <Route path="/address" element={<AddressContainer />} />
                      </Routes>
                      <Tester />
                    </OrdersProvider>
                  </AddressProvider>
                </SelectedAddressProvider>
              </CartProvider>
            </WishlistProvider>
          </AuthProvider>
        </FilterProvider>
      </Router>
    </div>
  );
}

export default App;
