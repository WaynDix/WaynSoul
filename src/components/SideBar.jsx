import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

export default function SideBar() {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Paper className="side-fil-ser">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={handleChange}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("tier", e.target.value)}
            >
              <FormControlLabel value="all" label="All" control={<Radio />} />
              <FormControlLabel value="1" label="Tier 1" control={<Radio />} />
              <FormControlLabel value="2" label="Tier 2" control={<Radio />} />
              <FormControlLabel value="3" label="Tier 3" control={<Radio />} />
              <FormControlLabel value="4" label="Tier 4" control={<Radio />} />
              <FormControlLabel value="5" label="Tier 5" control={<Radio />} />
            </RadioGroup>
          </Select>
        </FormControl>
      </Box>

      <TextField
        sx={{ mt: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Paper>
  );
}
