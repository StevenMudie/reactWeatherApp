import SearchBar from "./components/SearchBar";
import Cards from "./components/stylingComponents/Cards";
import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

function App() {
  const [valueInput, setValueInput] = useState("");
  const [data, setData] = useState();
  const setInputHandler = (event) => {
    setValueInput(event.target.value);
  };

  const getDataHandler = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=17d14a432e1c448e82772119220106&q=${valueInput}?&days=3`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .then(() => {
        console.log(data);
      });
  };

  return (
    <div className="container">
      <SearchBar getData={getDataHandler} setInput={setInputHandler} />
      <Cards>
        <Card
        //date={data.forecast.forecastday[0].date}
        // condition={
        //   <img
        //    src={data.forecast.forecastday[0].day.condition.icon}
        //   alt="weather icon"
        //   />
        // }
        // minTemp={data.forecast.forecastday[0].day.mintemp_c}
        //  maxTemp={data.forecast.forecastday[0].day.maxtemp_c}
        />
        <Card />
        <Card />
      </Cards>
    </div>
  );
}

export default App;
