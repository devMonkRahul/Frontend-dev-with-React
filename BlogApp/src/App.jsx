import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth"
import { login, logout } from "./store/features/authSlice"
import { Footer, Header } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

function App() {  

  const [ loading, setLoading ] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.status);  
  const navigate = useNavigate();

  useEffect(() => {
    try {
      authService.getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
          } else {
            dispatch(logout());
          }
        })
        // .finally(() => { setLoading(false) });
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between items-center justify-center bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            TODO: <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <div className="text-3xl font-bold underline text-red-400 flex justify-center items-center w-full h-screen">Loading...</div>
  );
}

export default App
 