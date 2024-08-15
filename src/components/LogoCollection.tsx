import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SpringwoodIcon from './SpringwoodIcon';
import DDIcon from "./DDIcon";
import Link from "@mui/material/Link";

const logos = [
    {
        logo: <SpringwoodIcon/>,
        link: 'https://www.digidoe.com/',
    },
    {
        logo: <DDIcon/>,
        link: 'https://www.digidoe.com/',
    },
];


export default function LogoCollection() {

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Partners and clients
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 0.5 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
              <Link href={logo.link} target={"_blank"} underline={"none"}>{logo.logo}</Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
