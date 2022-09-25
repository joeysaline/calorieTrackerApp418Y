import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(day, amount) {
  return { day, amount };
}

const data = [
  createData('Sunday', 0),
  createData('Monday', 3000),
  createData('Tuesday', 2000),
  createData('Wednesday', 3500),
  createData('Thursday', 1700),
  createData('Friday', 2100),
  createData('Saturday', 2400),


];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Your Weekly Caloric Intake</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="week"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}

          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Calories
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
