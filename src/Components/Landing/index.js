import React, { useState, useEffect, useMemo } from "react";
import { Grid, Box } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import UiCard from "../Card/UiCard";
import TitleData from "../Card/TitleData";
import Filter from "./Filter";
import PyramidData from "../Card/PyramidData";
import Breadcrumb from "../Card/Breadcrumb";

const theme = createMuiTheme({
  palette: {
    primary: {
      // blue and grey play nicely together.
      main: "#2196f3",
      light: "#e3f2fd",
      dark: "#0d47a1",
      contrastText: "#fff",
    },
    secondary: {
      // This is grey
      main: "#9e9e9e",
      light: "#e0e0e0",
      dark: "#212121",
    },
  },
});

export default ({ nationData, provinceList }) => {
  const [province, setProvince] = useState("Thailand");
  const [provinceData, setProvinceData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const thailandData = useMemo(() =>{
    return nationData
  },[]);

  
  useEffect(() => {
    console.log(isLoad);
    let data = provinceList.filter((val) => val.Province === province);
    setProvinceData(data);
    setIsLoad(false);
  }, [province]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box bgcolor="secondary.light">
          <Filter
            provinceList={provinceList}
            onChang={(value) => setProvince(value)}
          />
          <Box py={12}>
            <Grid container alignItems="center" justify="center" spacing={3}>
              <Grid item xs={12} xl={7} lg={7} md={10} sm={12} spaceing={10}>
                <Breadcrumb
                  province={province}
                  onChang={(value) => setProvince(value)}
                />
              </Grid>
              <Grid item xs={12} xl={7} lg={7} md={10} sm={12} spaceing={10}>
                {isLoad ? (
                  <div>load.....</div>
                ) : (
                  <TitleData provinceData={provinceData} />
                )}
              </Grid>
              <Grid item xs={12} xl={7} lg={7} md={10} sm={12} spaceing={10}>
                {isLoad ? null : <PyramidData provinceData={provinceData} />}
              </Grid>
              {province === "Thailand" &&
                thailandData
                  .filter(
                    (data) =>
                      data.IndicatorName !== "Urban_population" &&
                      data.IndicatorName !== "Rural_population" &&
                      data.IndicatorName !== "Population_density" &&
                      data.IndicatorName !== "Survival_to_age_65_female" &&
                      data.IndicatorName !== "Survival_to_age65Male"
                  )
                  .map((data) => (
                    <Grid
                      item
                      xs={12}
                      xl={7}
                      lg={7}
                      md={10}
                      sm={12}
                      key={data.IndicatorName}
                    >
                      <UiCard data={data} />
                    </Grid>
                  ))}
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};
