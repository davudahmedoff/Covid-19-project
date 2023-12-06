import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [infromation, setInformation] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setInformation(res.data[date]))
      .catch((err) => console.log(err));
  }, [infromation, date]);
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h1 className="text-white text-center display-4">
              COVID-19 TURKEY SEARCH ENGINE
            </h1>
            <input
              value={date}
              type="text"
              placeholder="DD/MM/YY"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
            />
            <table class="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Patients</th>
                  <th scope="col">Total Tests</th>
                  <th scope="col">Deaths</th>
                </tr>
              </thead>
              {date && (
                <tbody>
                  <tr>
                    <th
                      scope="row"
                      className={
                        infromation === undefined
                          ? "bg-danger"
                          : "bg-success text-white"
                      }
                    >
                      {infromation === undefined
                        ? "Waiting for informations"
                        : infromation.date}
                    </th>
                    <td
                      className={
                        infromation === undefined
                          ? "bg-danger"
                          : "bg-success text-white"
                      }
                    >
                      {infromation === undefined
                        ? "Waiting for informations"
                        : infromation.totalTests}
                    </td>
                    <td
                      className={
                        infromation === undefined
                          ? "bg-danger"
                          : "bg-success text-white"
                      }
                    >
                      {infromation === undefined
                        ? "Waiting for informations"
                        : infromation.patients}
                    </td>
                    <td
                      className={
                        infromation === undefined
                          ? "bg-danger"
                          : "bg-success text-whitessd"
                      }
                    >
                      {infromation === undefined
                        ? "Waiting for informations"
                        : infromation.deaths}
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
