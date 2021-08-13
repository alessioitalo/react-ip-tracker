import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import IpMap from "./components/IpMap";
import ErrorMessage from "./components/ErrorMessage";

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
  // const [ip, setIp] = useState("");
  // const [timezone, setTimezone] = useState("");
  // const [isp, setIsp] = useState("");
  // const [location, setLocation] = useState("");
  // const [coordinates, setCoordinates] = useState();
  const [showError, setShowError] = useState(false);

  const fetchIpData = async (givenIp) => {
    try {
      const response = await axios.get(`http://ip-api.com/json/${givenIp}`);
      await setIsLoading(false);
      if (response.data.status === "fail") {
        throw new Error();
      }
      await setIpResponse(response.data);
    } catch (error) {
      setShowError(true);
    }
  };

  useEffect(() => {
    fetchIpData("");
  }, []);

  return (
    <div className="App">
      {isLoading && !showError && <Loading />}
      <Header fetchData={fetchIpData} />
      {showError && <ErrorMessage closeError={() => setShowError(false)} />}
      <Info ipResponse={ipResponse} />
      <IpMap coordinates={[ipResponse.lat, ipResponse.lon]} />
    </div>
  );
}

export default App;
