import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../component/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/switchTabs";
import Carousel from "../../../component/Carousel/Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  //   console.log(data);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};
export default Trending;
