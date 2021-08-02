import React, { memo } from "react";

const WeatherForm = ({searchWeather, inputRef}) => {
    return (
        <form onSubmit={searchWeather}>
          <input type="text" ref={inputRef} />
          <button type="submit">
            Search
          </button>
        </form>
      );
}

export default memo(WeatherForm);