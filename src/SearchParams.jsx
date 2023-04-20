import React, { useEffect, useState } from "react";
import Results from "./Results";

const localCache = {};
const COUNTRIES = [
  "India",
  "United States",
  "Spain",
  "Canada",
  "France",
  "New Zealand",
];
const SearchParams = () => {
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [uniName, setUniName] = useState("");
  const [uniData, setUniData] = useState([]);
  const [uniNameList, setUniNameList] = useState([]);
  useEffect(() => {
    getUniversityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getUniversityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  function updateUniversity(e) {
    e.preventDefault();
    if (!uniName == "") {
      getUniversity();
    } else {
      getUniversityData();
    }
  }
  async function getUniversity() {
    if (localCache[uniName]) {
      setUniData(localCache[uniName]);
    } else {
      var name = uniName.replace(" ", "+");
      var countryName = country.replace(" ", "+");
      var res = await fetch(
        `http://universities.hipolabs.com/search?country=${countryName}&name=${name}`
      )
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
      const json = res.map((e, index) => ({
        id: index,
        country: e.country,
        name: e.name,
        website: e.web_pages[0],
      }));
      setUniData(json);
      localCache[uniName] = json;
    }
  }

  async function getUniversityData() {
    if (localCache[country]) {
      setUniData(localCache[country]);
    } else {
      var res = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      )
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
      const json = setUniData(
        res.map((e, index) => ({
          id: index,
          country: e.country,
          name: e.name,
          website: e.web_pages[0],
        }))
      );
      setUniNameList(res.map((e, index) => ({ id: index, name: e.name })));
      setUniName("");
      localCache[country] = json;
    }
  }

  return (
    <div className="container">
      <div className="search-parms">
        <form onSubmit={updateUniversity}>
          <div className="form-item">
            <label htmlFor="country">Country</label>
            <select
              className="select"
              name="country"
              id="country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              {COUNTRIES.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-item">
            <select
              className="select"
              name="uniName"
              id="uniName"
              disabled={!uniNameList.length}
              value={uniName}
              onChange={(e) => {
                setUniName(e.target.value);
              }}
            >
              <option></option>
              {uniNameList.map((uni) => (
                <option key={uni.id}>{uni.name}</option>
              ))}
            </select>
          </div>

          <input type="submit" value="submit" />
        </form>
      </div>
      <Results uniData={uniData} />
    </div>
  );
};

export default SearchParams;
