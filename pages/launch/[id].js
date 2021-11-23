import Grid from "@mui/material/Grid";
import Head from "next/head";
import Container from "@mui/material/Container";
import styles from "./Launchdetail.module.scss";
import Button from "@mui/material/Button";
import Link from "next/link";
import { observer } from "mobx-react-lite";

export default function DetailLaunch(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test app SpaceX Launches List</title>
        <meta name="description" content="SpaceX launches" />
      </Head>

      <header>
        <div className="pageTitle">
          <h1>{props.launch.name}</h1>
        </div>
      </header>

      <main>
        <div className={styles.launches}>
          <Container>
            <Grid container spacing={2}></Grid>

            <Link href="/">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7000cc",
                  "&:hover": {
                    backgroundColor: "#540099",
                  },
                }}
              >
                Назад
              </Button>
            </Link>
          </Container>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.spacexdata.com/v5/launches/${context.params.id}`
  );
  const launch = await res.json();

  return {
    props: {
      launch,
    },
  };
};
