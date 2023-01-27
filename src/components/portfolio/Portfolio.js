import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  return (
    <Box mt={"3rem"}>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              images={project.images}
              live={project.live}
              source={project.source}
              title={project.title}
              info={project.info}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
