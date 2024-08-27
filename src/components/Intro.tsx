import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/system';

export default function Intro() {
  const theme = useTheme();
  
  return (
        <Box
              id="intro" sx={{
          pt: { xs: 4, sm: 15 },
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
                    width: { sm: '80%'},
                    textAlign: { sm: 'left', md: 'center' },
                  }}
            >
                <Typography component="h2" variant="h3" sx={{ color: 'text.secondary' }}>
                    Sophkos provides AI-driven onboarding and transaction monitoring solutions
                </Typography><br/><br/>
              <Typography component="h2" variant="h5" sx={{ color: 'text.secondary' }}>
                  APIs, SDKs, IOS and Android applications that will make it smooth, easy and fully compliant with your local law,
                  legislation, and regulation, onboarding, transaction monitoring, and secure communication with your clients.
              </Typography>
            </Box>
          </Container>
        </Box>
  );
}
