import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth"
import { login, logout } from "./store/features/authSlice"
import { Footer, Header } from "./components";

function App() {  

  const [ loading, setLoading ] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => { setLoading(false) });
  }, []);

  return !loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between items-center justify-center bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            {/* <Outlet /> */}
            {/* TODO: Add routes */}
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
 