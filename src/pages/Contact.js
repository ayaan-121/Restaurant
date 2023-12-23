import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5,ml:10,"& h4":{fontWeight:'bold',mb:2}}}>
        <Typography variant='h4'>
          Contact my Resturant
        </Typography>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Incidunt molestiae ex maxime exercitationem adipisci. 
           Vero culpa ea omnis voluptatum accusamus numquam laborum labore, 
          dicta rem obcaecati explicabo nobis quo itaque!</p>
      </Box>
      <Box sx={{m:3,width:'600px',ml:10, "@media(max-width:600px)":{
        width:'300px'}
      }}>
        <TableContainer component={Paper}>
      <Table aria-label='contact table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{bgcolor:'black',color:'white',}} align='center'>
              Contact Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
          <SupportAgentIcon sx={{color:'red',pt:1}}/> 18000-00-000(TollFree)
            </TableCell>
           
          </TableRow>
          <TableRow>
          <TableCell>
          <EmailIcon sx={{color:'skyblue',pt:1}}/> @helpdesk.com
            </TableCell>
          </TableRow>
          <TableRow>
          <TableCell>
          <CallIcon sx={{color:'darkblue',pt:1}}/> 88558800
            </TableCell>
          </TableRow>
        </TableBody>

      </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
