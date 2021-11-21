import Head from "next/head";
import LaunchCard from "../components/LaunchCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

import styles from "../styles/Home.module.scss";

const apiAllLaunches = "https://api.spacexdata.com/v5/launches/query";
let countLaunches = 12;

const Home = ({ launches }) => {
  const cards = launches.docs.map((anObjectMapped, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={4}>
        <LaunchCard data={anObjectMapped} />
      </Grid>
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Test app SpaceX Launches List</title>
        <meta name="description" content="SpaceX launches" />
      </Head>

      <header>
        <div className={styles.pageTitle}>
          <h1>SpaceX Launches</h1>
        </div>
      </header>

      <main>
        <div className="launches">
          <Container>
            <Grid container spacing={2}>
              {cards}
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      options: {
        limit: 12,
        page: 2,
      },
    }),
  };

  const res = await fetch(apiAllLaunches, requestOptions);
  const launches = await res.json();

  return {
    props: {
      launches,
    },
  };
}

export default Home;
