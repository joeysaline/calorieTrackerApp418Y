import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Progress(sum) {
  sum = 10000
  return (
    <React.Fragment>
      <Title>Progress</Title>
      <Typography component="p" variant="h4">
        + {' ' + sum}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
