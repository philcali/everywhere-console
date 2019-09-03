import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MapContainer from './components/MapContainer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MapContainer />
    </div>
  );
};
