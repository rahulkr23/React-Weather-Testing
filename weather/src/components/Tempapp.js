import React, { useEffect, useState } from "react";
import "./css/style.css";


const Tempapp = () => {

    const [city, setCity] = useState("null");
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}73217126edaa4416dd48e3db1ba7968a`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson);


        };
        fetchApi();

    })

    return (
        <>
            <div className>
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => {

                        }} />
                </div>



                <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view">{city}</i>
                    </h2>
                    <h1 className="temp">
                        5.25°Cel

                    </h1>
                    <h3 className="tempmin_max"> min :5.25°Cel | max :5.25°Cel </h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>



        </>
    )
}
export default Tempapp;
