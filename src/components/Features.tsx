import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/system';
import Grid from "@mui/material/Grid";


export default function Features() {
  const theme = useTheme();
  
  return (
        <Box
              id="features" sx={{
          pt: { xs: 4, sm: 30 },
          pb: { xs: 8, sm: 30 },
          color: 'white',
          bgcolor: 'hsl(360, 100%, 100%, 1)',
        }}>
          <Container
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: { xs: 4, sm: 8 },
                }}
          >
            <Box
                  sx={{
                    width: { sm: '100%'},
                    textAlign: { sm: 'left', md: 'center' },
                  }}
            >
                <Typography component="h2" variant="h3" sx={{ color: 'text.secondary' }}>
                    Features
                </Typography>
                <br/>
                
                <Grid container spacing={3} sx={{
                    textAlign: { sm: 'left', md: 'left' },
                }}>
                    <Grid item xs={4}>
                        <img src={"/features.webp"} width={"100%"}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography component="h2" variant="h5" sx={{ color: 'text.secondary' }}>
                            Sophkos solutions allow to identify, authenticate, and monitor a retail or a business client’s transactions everywhere in the world automatically without using expensive special hardware. Compliance personnel require minimum training for customers and business onboarding and transaction monitoring.  Sophkos solutions provide perfect secure entry points, storage, and processing of personal and confidential information for financial institutions.
                        </Typography>
                    </Grid>
                </Grid>
              
            </Box>
          </Container>
        </Box>
  );
}
