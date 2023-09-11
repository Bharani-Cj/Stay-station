import { HiLocationMarker } from "react-icons/hi";
import "./SearchBar.css";

const SearchBar = ({ name, margin }) => {
  return (
    <div className="flexCenter search-bar" style={{ margin: `${margin}` }}>
      <HiLocationMarker color="blue" size={25} />
      <input type="text" placeholder="Enter name or country.." />
      <button className="button">{name}</button>
    </div>
  );
};

export default SearchBar;
