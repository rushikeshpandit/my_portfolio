import React from "react";
import IconLink from "./IconLink";
import { Box, ImageList, ImageListItem } from "@mui/material";
import Style from "./Portfolio.module.scss";

function PortfolioBlock(props) {
  const { images, live, source, title, info } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      m={10}
    >
      {images && <ImageList sx={{
        width: images.length < 3 ? 400 : 600,
        height: 450,
        gap: 20
      }}
        cols={images.length < 3 ? images.length : 3}
        rowHeight={200}
      >
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item}?w=300&h=100&fit=fill&auto=format`}
              srcSet={`${item}?w=300&h=100&fit=fill&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      }
      <h1 style={{ fontSize: "2rem", marginTop: 20 }} >{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <div className={Style.displaylinebreak}>{info}</div>
        {
          live && <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={live} title={"Download"} icon={"fa fa-safari"} />
          </Box>
        }
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
        </Box>
      </Box>
    </Box>
  );
}
export default PortfolioBlock;
