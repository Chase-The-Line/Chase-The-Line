import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Buttons() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 20,
        fontFamily: "Libre Baskerville",
      }}
      spacing={2}
      direction="row"
    >
      <Button sx={{ color: "#fff"}} variant='outlined'>Découvrir</Button>
    </Stack>
  );
}
