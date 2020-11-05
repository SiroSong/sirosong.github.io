import Head from 'next/head'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import styles from './layout.module.css'
import Logo from './Logo';
import Menu from './menu';
import MenuMin from './menu_min';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

export default function Layout({ children }) {
  const theme = createMuiTheme({
    overrides: {
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Grid container style={{ height: '100vh' }}>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <title>12312</title>
        </Head>
        <Hidden smDown>
          <Grid item xs={3} className={styles.menu_area}>
            <Logo />
            <Menu />
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <MenuMin />
        </Hidden>
        <Grid item xs="auto" className={styles.main}>
          {children}
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

