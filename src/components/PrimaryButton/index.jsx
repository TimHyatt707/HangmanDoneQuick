import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
  buttonPadding: {
    margin: '15px'
  }
});

const PrimaryButton = props => {
  const { classes, text, route } = props;
  if (route) {
    return (
      <Link to={route} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" className={classes.buttonPadding}>
          {text}
        </Button>
      </Link>
    );
  }
  return (
    <Button variant="contained" color="primary" className={classes.buttonPadding}>
      {text}
    </Button>
  );
};

export default withStyles(styles)(PrimaryButton);
