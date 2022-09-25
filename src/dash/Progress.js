import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Progress() {
  return (
    <React.Fragment>
      <Title>Progress</Title>
      <Typography component="p" variant="h4">
        +0
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        this current week:
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </React.Fragment>
  );
}
