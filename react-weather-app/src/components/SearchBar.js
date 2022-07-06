import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div className="searchBar">
      <input
        className="locationInput"
        placeholder="Please enter a location."
        onInput={props.setInput}
      />
      <button onClick={props.getData}>Search</button>
    </div>
  );
}

export default SearchBar;
