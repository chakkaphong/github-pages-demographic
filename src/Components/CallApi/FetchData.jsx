import React, { useState, useEffect } from "react";
import Ladning from "../Landing";
const FetchData = () => {
  const [provinceList, setProvince] = useState([]);
  const [nationData, setNationData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    let mounted = true;
    const callApi = async () => {
      console.log("callApi");

      const response_provinces = await fetch(
        "https://raw.githubusercontent.com/chakkaphong/demographic/master/data.json"
      );
      const response_nation_data = await fetch(
        "https://raw.githubusercontent.com/chakkaphong/demographic/master/Thai_Detail.json"
      );
      const provinces = await response_provinces.json();
      const nationData = await response_nation_data.json();
      if (mounted) {
        setProvince(provinces);
        setNationData(nationData);
        setIsLoad(false);
      }
    };
    callApi();
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div>
      {isLoad ? <div>Loading...</div> : <Ladning nationData={nationData} provinceList={provinceList} />}
    </div>
  );
};

export default FetchData;
