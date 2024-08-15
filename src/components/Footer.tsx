import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import SitemarkIcon from './SitemarkIcon';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link href="https://sophkos.com/">SophKos&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'left', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '90%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '90%' } }}>
            <SitemarkIcon />
              <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                  Office Address
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  No.5, 17/F, Strand 50, 50 Bonham Strand, Sheung Wan, Hong Kong
              </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                Terms and Conditions
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Unless otherwise specified, the information contained on this site is Sophkos copyright. Sophkos website, APIs, SDKs, and mobile applications content and materials are protected.
                All materials, text, articles, images, documents, photographs, pictures, sounds, signs and other intellectual products, including code and software, on the site content and mobile application are protected by copyright law and Sophkos's written permission. No material on this website cannot be copied, changed, reproduced, republished, uploaded to another computer or distributed without written permission.
                All kinds of articles, articles, pictures, sounds and other materials on this website may be used only with written permission and mandatory reference.
                All users who visit the Sophkos website and use our services and applications are deemed to have read and accepted these Terms and Conditions.
            </Typography>
          </Box>
        </Box>
        
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 4 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
      </Box>
    </Container>
  );
}
