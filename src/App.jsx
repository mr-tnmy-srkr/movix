import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { getApiConfiguration } from "./redux/homeSlice";
import { fetchDataFromApi } from "./utils/api";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then( response => {
        console.log(response.results);
        dispatch(getApiConfiguration(response));
      })
      .catch((error)=> {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
