import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useCallback, useState } from "react";
import "./Components.css";
import SearchBox from "./SearchBox";

function AppForm() {

  const [details, setDetails] = useState({});

  const [place, setPlace] = useState("");

  const placeAndDetailCallback = useCallback((loc,detail) => {
    setPlace(loc)
    setDetails(detail)
  }, [])

  return (
    <>
    <SearchBox placeAndDetailCallback={placeAndDetailCallback} />
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
