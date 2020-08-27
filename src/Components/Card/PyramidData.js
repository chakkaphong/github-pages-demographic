import React, { useState, useEffect } from "react";
import CardPyramid from './CardPyramid';
import PieCard from './PieCard';

function filterData(param) {
  let filter = Object.keys(param)
    .filter(
      (item) =>
        item !== "ID" &&
        item !== "region" &&
        item !== "Province" &&
        item !== "Density" &&
        item !== "Sex" &&
        item !== "medianAge" &&
        item !== "Rank" &&
        item !== "Total" &&
        item !== "Undefine"
    )
    .map((item) => {
      return param[item];
    });
  return filter;
}

function selectUndefinePeople(provinceData){
  if(provinceData === null || provinceData.length === 0) return null
  else return Object.keys(provinceData).filter(column => column === 'Undefine').map((column) => provinceData[column])[0];
}


function summaryOfPrereproductive(provinceData){
  if(provinceData.length === 0 || provinceData === null) return null;
  else return Object.keys(provinceData).filter(column => column === 'preReproductive_0-4' || 
      column === 'preReproductive_5-9' ||
      column === 'preReproductive_10-14').map(column => provinceData[column]).reduce((prev, cur) => Number(prev) + Number(cur))
}

function summaryOfReproductive(provinceData){
  if(provinceData.length === 0 || provinceData === null) return null;
  else return Object.keys(provinceData).filter(column => column === 'Reproductive_15-19' || 
      column === 'Reproductive_20-24' ||
      column === 'Reproductive_25-29' ||
      column === 'Reproductive_30-34' ||
      column === 'Reproductive_35-39' ||
      column === 'Reproductive_40-44' )
      .map(column => provinceData[column]).reduce((prev, cur) => Number(prev) + Number(cur))
}
function summaryOfPostreproductive(provinceData){
  if(provinceData.length === 0 || provinceData === null) return null;
  else return Object.keys(provinceData).filter(column => column === 'postReproductive_45-49' || 
      column === 'postReproductive_50-54' ||
      column === 'postReproductive_55-59' ||
      column === 'postReproductive_60-64' ||
      column === 'postReproductive_65-69' ||
      column === 'postReproductive_70-74' ||
      column === 'postReproductive_75-79' ||
      column === 'postReproductive_80-84' ||
      column === 'postReproductive_85-89' ||
      column === 'postReproductive_90-94' ||
      column === 'postReproductive_95-99' ||
      column === 'postReproductive_100+' )
      .map(column => provinceData[column]).reduce((prev, cur) => Number(prev) + Number(cur))
}

const initPopulation = {
  Name:'',
  Total:'',
  preReProductive:'',
  reProductive:'',
  postProductive:'',
  Rank:'',
  unDefine:''

}

const PyramidData = ({ provinceData }) => {
  const [total, setTotal] = useState([]);
  const [male, setMale] = useState([]);
  const [female, setFeMale] = useState([]);

  const [productive, setProductive] = useState(initPopulation);

  useEffect(() => {
    const [Total, Male, Female] = provinceData;
    
    const spitTotal = filterData(Total);
    const spitMale = filterData(Male);
    const spitFemale = filterData(Female);

    setProductive({
      Name: provinceData[0].Province,
      Total: provinceData[0].Total,
      preReProductive: summaryOfPrereproductive(Total),
      reProductive: summaryOfReproductive(Total),
      postProductive: summaryOfPostreproductive(Total),
      Rank: provinceData[0].Rank,
      unDefine: provinceData[0].Undefine
    }

    )
    setTotal(spitTotal);
    setMale(spitMale);
    setFeMale(spitFemale);
    
  }, [provinceData]);


  return (
      <React.Fragment>
        <CardPyramid total={total} male={male} female={female} provinceName={provinceData[0].Province}/>
        <PieCard productive={productive} />
      </React.Fragment>
  );
};

export default PyramidData;
