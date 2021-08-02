import React, { memo } from 'react'

const WeatherResult = ({temperature}) => {
    return (
        <div>
            <h1>{temperature}</h1>
        </div>
    )
}
export default memo(WeatherResult);