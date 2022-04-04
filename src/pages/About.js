import React from "react";
import CardAbout from "components/core/CardAbout";
import Avatars from "components/core/Avatars";
import { Box } from "@mui/system";
import NavBlack from "components/core/NavBlack";

export default function Cards() {
  return (
    <Box>
      <NavBlack />
      <img
        sx={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
          backgroundSize: "100% 100%",
          transform: "rotate(-154.9deg)",
          opacity: "0.4",
          width: "30px",
          height: "39px",
        }}
        src="assets/images/star-1.svg"
        alt="star"
        className="star-1 flex-col-hstart-vstart clip-contents"
      ></img>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box>
            <Box>
              <CardAbout />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              m: 10,
            }}
          >
            <Avatars />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
