import React, { useState } from "react";
import { Box } from "@mui/material";
import { useLocationTitle } from "src/hooks";
import MiddleContainer from "../containers/MiddleContainer";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function Signup() {
  const [inputValue, setInputValue] = useState();

  useLocationTitle("Discover Gists");

  return (
    <MiddleContainer>
      <Box mt={2}>
        <TextField
          placeholder="e.g hafiztalhakh"
          value={inputValue}
          onChange={(inputValue) => setInputValue(inputValue)}
        />
      </Box>
      <Box>
        <Button loading={false}>Search</Button>
      </Box>
    </MiddleContainer>
  );
}
