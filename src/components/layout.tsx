import { Grid } from '@material-ui/core';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div style={{ height: '100vh', margin: 0, padding: '70px 50px' }}>
      <Grid item style={{ textAlign: 'center' }}>
        {props.children}
      </Grid>
    </div>
  );
}
