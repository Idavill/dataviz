import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright.tsx';
import ChartUserByCountry from './ChartUserByCountry.tsx';
import CustomizedTreeView from './CustomizedTreeView.tsx';
import CustomizedDataGrid from './CustomizedDataGrid.tsx';
// import HighlightedCard from './HighlightedCard.tsx';
import PageViewsBarChart from './PageViewsBarChart.tsx';
import SessionsChart from './SessionsChart.tsx';
import StatCard, { StatCardProps } from './StatCard.tsx';
import MyResponsiveBar from '../NivoTest.js'

const nivoData: Object[] = [
  {
    "country": "AD",
    "hot dog": 130,
    "hot dogColor": "hsl(159, 70%, 50%)",
    "burger": 200,
    "burgerColor": "hsl(68, 70%, 50%)",
    "sandwich": 96,
    "sandwichColor": "hsl(290, 70%, 50%)",
    "kebab": 75,
    "kebabColor": "hsl(230, 70%, 50%)",
    "fries": 155,
    "friesColor": "hsl(84, 70%, 50%)",
    "donut": 43,
    "donutColor": "hsl(294, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 15,
    "hot dogColor": "hsl(236, 70%, 50%)",
    "burger": 30,
    "burgerColor": "hsl(174, 70%, 50%)",
    "sandwich": 160,
    "sandwichColor": "hsl(240, 70%, 50%)",
    "kebab": 190,
    "kebabColor": "hsl(287, 70%, 50%)",
    "fries": 58,
    "friesColor": "hsl(5, 70%, 50%)",
    "donut": 149,
    "donutColor": "hsl(86, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 189,
    "hot dogColor": "hsl(112, 70%, 50%)",
    "burger": 136,
    "burgerColor": "hsl(285, 70%, 50%)",
    "sandwich": 143,
    "sandwichColor": "hsl(187, 70%, 50%)",
    "kebab": 28,
    "kebabColor": "hsl(47, 70%, 50%)",
    "fries": 0,
    "friesColor": "hsl(53, 70%, 50%)",
    "donut": 86,
    "donutColor": "hsl(61, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 196,
    "hot dogColor": "hsl(329, 70%, 50%)",
    "burger": 187,
    "burgerColor": "hsl(324, 70%, 50%)",
    "sandwich": 27,
    "sandwichColor": "hsl(107, 70%, 50%)",
    "kebab": 13,
    "kebabColor": "hsl(32, 70%, 50%)",
    "fries": 91,
    "friesColor": "hsl(12, 70%, 50%)",
    "donut": 75,
    "donutColor": "hsl(202, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 176,
    "hot dogColor": "hsl(139, 70%, 50%)",
    "burger": 2,
    "burgerColor": "hsl(29, 70%, 50%)",
    "sandwich": 193,
    "sandwichColor": "hsl(219, 70%, 50%)",
    "kebab": 181,
    "kebabColor": "hsl(85, 70%, 50%)",
    "fries": 115,
    "friesColor": "hsl(50, 70%, 50%)",
    "donut": 60,
    "donutColor": "hsl(347, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 79,
    "hot dogColor": "hsl(57, 70%, 50%)",
    "burger": 54,
    "burgerColor": "hsl(42, 70%, 50%)",
    "sandwich": 31,
    "sandwichColor": "hsl(333, 70%, 50%)",
    "kebab": 3,
    "kebabColor": "hsl(283, 70%, 50%)",
    "fries": 148,
    "friesColor": "hsl(339, 70%, 50%)",
    "donut": 162,
    "donutColor": "hsl(326, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 21,
    "hot dogColor": "hsl(20, 70%, 50%)",
    "burger": 191,
    "burgerColor": "hsl(22, 70%, 50%)",
    "sandwich": 150,
    "sandwichColor": "hsl(181, 70%, 50%)",
    "kebab": 190,
    "kebabColor": "hsl(167, 70%, 50%)",
    "fries": 136,
    "friesColor": "hsl(85, 70%, 50%)",
    "donut": 179,
    "donutColor": "hsl(178, 70%, 50%)"
  }
]

const data: StatCardProps[] = [
  {
    title: 'Users',
    value: '14k',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: 'Conversions',
    value: '325',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'Event count',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default function MainGrid() {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        {/* <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid> */}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <div style={{height:"200px"}}>
          <MyResponsiveBar data={nivoData}/>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
