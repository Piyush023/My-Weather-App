import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "./Components.css";
import axios from "axios";

function AppForm() {
  const API_KEY = `87a79624edaa6a528d7be1d31ca3b070`;

  const [details, setDetails] = useState({});

  const [place, setPlace] = useState("");

  const handleCityChange = (e) => {
      setPlace(e.target.value);
  };

  let cityKaNaam = place;

  const getWeatherDetails = (cityKaNaam) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityKaNaam}&units=metric&appid=${API_KEY}`;
    axios
      .get(URL)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter City"
            onChange={handleCityChange}
          />
        </Form.Group>
        <div className="d-grid">
          <Button
            variant="outline-dark"
            type="button"
            className="buttonStyle"
            size="lg"
            onClick={getWeatherDetails(cityKaNaam)}
          >
            Search
          </Button>
        </div>
      </Form>
      <Card style={{ width: "18rem" }}>
        <Card.Body className="text-center">
          <Card.Title className="cardTitle">
            {place === "" ? "Enter City" : place}
          </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="weatherHeading">
              Temperature
              <Card.Text className="weatherData">
                {place === "" ? "" : details?.main?.temp.toPrecision(2)}°C
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="weatherHeading">
              Humidity
              <Card.Text className="weatherData">
                {place === "" ? "" : details?.main?.humidity}%
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="weatherHeading">
              Wind Speed
              <Card.Text className="weatherData">
                {place === "" ? "" : details?.wind?.speed}km/h
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="weatherHeading">
              Wind Gusts
              <Card.Text className="weatherData">
                {place === "" ? "" : details?.wind?.gust}km/h
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default AppForm;
