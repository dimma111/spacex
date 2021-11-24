import Head from "next/head";
import LaunchCard from "../components/LaunchCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import launchesStore from "../store/mainStore";
import { observer } from "mobx-react-lite";

import styles from "../styles/Home.module.scss";
import { useEffect } from "react";

const Home = observer(() => {
  let currentPage = 1;

  useEffect(() => {
    launchesStore.launches = [];
    launchesStore.fetchLaunches(currentPage);
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      1
    ) {
      currentPage++;
      launchesStore.fetchLaunches(currentPage);
      console.log("endscroll");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Test app SpaceX Launches List</title>
        <meta name="description" content="SpaceX launches" />
      </Head>

      <header>
        <div className="pageTitle">
          <h1>SpaceX Launches</h1>
        </div>
      </header>

      <main>
        <div className={styles.launches}>
          <Container>
            <Grid container spacing={2}>
              {launchesStore.launches.map((anObjectMapped, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <LaunchCard data={anObjectMapped} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      </main>
    </div>
  );
});

// export async function getStaticProps() {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       options: {
//         limit: 12,
//         page: 2,
//       },
//     }),
//   };

//   const res = await fetch(apiAllLaunches, requestOptions);
//   const launches = await res.json();

//   launchesStore.addLaunch(launches.docs);
//   return {
//     props: {
//       launches,
//     },
//   };
// }

export default Home;
