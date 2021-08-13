import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import IpMap from "./components/IpMap";
import ErrorMessage from "./components/ErrorMessage";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [ipResponse, setIpResponse] = useState({
    query: "",
    city: "",
    regionName: "",
    countryCode: "",
    timezone: "/",
    isp: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const fetchIpData = async (givenIp) => {
    setShowMap(false);
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${givenIp}&domain=${givenIp}`
      );
      await setIsLoading(false);
      if (response.statusText !== "OK") {
        throw new Error();
      }
      await setIpResponse({
        query: response.data.ip,
        city: response.data.location.city,
        regionName: response.data.location.region,
        countryCode: response.data.location.country,
        timezone: response.data.location.timezone,
        isp: response.data.isp,
        coordinates: [
          `${response.data.location.lat}`,
          `${response.data.location.lng}`,
        ],
      });
      setShowMap(true);
    } catch (error) {
      setShowError(true);
    }
  };

  useEffect(() => {
    fetchIpData("");
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      {isLoading && !showError && <Loading />}
      <Header fetchData={fetchIpData} />
      {showError && <ErrorMessage closeError={() => setShowError(false)} />}
      <Info ipResponse={ipResponse} />
      {showMap && <IpMap coordinates={ipResponse.coordinates} />}
    </div>
  );
}

export default App;
