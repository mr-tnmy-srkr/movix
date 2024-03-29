import HeroBanner from "./HeroBanner/HeroBanner";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import Trending from "./Trending/Trending";
import "./style.scss";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{height : "100vh"}}></div>
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
export default Home;
