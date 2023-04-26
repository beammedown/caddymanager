import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';



const fetch = require('node-fetch');
let va = "";
let Searchitems: JSON = {};

async function  req(search: string)  {

  const data: JSON = fetch('http://localhost:8080/' + search).then((res: { json: () => any; }) =>  res.json()).then((data: JSON) => {return data}).catch((err: any) => {return {"ERROR": String(err)}})
  return data;
}

const ShowSearchitems = (props: { name: string; }[]) => {
  return (
    <div>
      {props.map((item) => (
        <div key={item.name}>
          <span>item</span>
        </div>
      ))}
    </div>
  );
};


export default function App() {

  return (
    <main>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Suche..."
        inputProps={{ 'aria-label': 'search' }}
        className=""
        onChange={(e) => va = e.target.value}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={ () => { Searchitems = req(va) }} >
        <SearchIcon />
      </IconButton>
    </Paper>
    <div>
      <ShowSearchitems Searchitems />
    </div>
    </main>
  );
}