import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import NewsCard from "../Cards/NewsCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function News() {
  const [news, setNews] = React.useState([]);

  const fetchData = () => {
    let url =
      "https://finnhub.io/api/v1/news?category=general&token=c94i99aad3if4j50rvn0";

    axios.get(url).then((res) => {
      const pData = res.data;
      //console.log(url);
      setNews(pData);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  let final1 = [];
  for (let i = 0; i < news.length && i < 10; i++) {
    final1.push(
      <Grid item xs={12} md={6} lg={4} key={i}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            height: 450,
            width: 300,
            flexDirection: "column",
          }}
        >
          <NewsCard data={news[i]} />
        </Paper>
      </Grid>
    );
  }

  return (
    <Grid
      sx={{
        display: "flex",
        height: 450,
      }}
    >
      {final1}
    </Grid>
  );
}
