import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
function App() {
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then(function (response) {
        console.log(response.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return <>App</>;
}

export default App;
