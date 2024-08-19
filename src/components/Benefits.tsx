import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/system';
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {ListItemIcon, ListItemText} from "@mui/material";


export default function Benefits() {
  const theme = useTheme();
  
  return (
        <Box
              id="benefits" sx={{
          pt: { xs: 4, sm: 20 },
          pb: { xs: 8, sm: 20 },
          color: 'white',
            bgcolor: 'hsl(220, 30%, 2%)',
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
                <Typography component="h2" variant="h3">
                    Benefits
                </Typography>
                
                <Typography component="h2" variant="h5">
                    <List dense={false} >
                        <ListItem>
                            <ListItemIcon><DoneIcon fontSize={"small"} sx={{ color: 'common.white' }}/></ListItemIcon>
                            <ListItemText
                                  disableTypography={true}
                                  primary={"Significant reduction in number of required compliance personnel with significant increase in quality of compliance operations."}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><DoneIcon fontSize={"small"} sx={{ color: 'common.white' }}/></ListItemIcon>
                            <ListItemText
                                  disableTypography={true}
                                  primary={"No expensive special hardware or software is required."}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><DoneIcon fontSize={"small"} sx={{ color: 'common.white' }}/></ListItemIcon>
                            <ListItemText
                                  disableTypography={true}
                                  primary={"No manual entry is required for seamless and secure entry and exchange of information."}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><DoneIcon fontSize={"small"} sx={{ color: 'common.white' }}/></ListItemIcon>
                            <ListItemText
                                  disableTypography={true}
                                  primary={"Elimination of several topologies of fraud and money laundering."}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><DoneIcon fontSize={"small"} sx={{ color: 'common.white' }}/></ListItemIcon>
                            <ListItemText
                                  disableTypography={true}
                                  primary={"Next level of comfort in User Experience."}
                            />
                        </ListItem>
                    </List>
                </Typography>
              
            </Box>
          </Container>
        </Box>
  );
}
