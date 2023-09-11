import "./Properties.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import useProperties from "../../customHooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className="wrapper">
        <span> Error while fetching data</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading" />
      </div>
    );
  }

  return (
    <div className="wrapper paddings flexCenter">
      <div className="prop-container">
        <SearchBar name="Search" margin="25px auto" />
        <div className="properties flexCenter properties">
          {data?.residency?.map((el, index) => (
            <PropertyCard card={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
