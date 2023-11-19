import React from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";

export default function Weather(props) {
  function showWeather(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C `
    );
  }

  let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  //api.openweathermap.org/data/2.5/weather?q=$[props.city]&appid=[apiKey]&units=metric

  axios.get(apiUrl).then(showWeather);

  return (
    <div>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
      <h2>Hello Weather</h2>;
    </div>
  );
}
