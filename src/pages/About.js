import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,
      textAlign:'center',
      p: 2,
      "& h4":{
        fontWeight:'bold',
        fontSize:'2rem',
        my:'2',
      },
      "& p":{
        textAlign:'justify',
      },
      "@media (max-width:600px)":{
        mt:0,
        "& h4":{
          fontSize:'1.5rem',
        }
      }
      }}>
        <Typography variant="h4">
          Welcome to my Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates porro provident,
          fuga tempora dolore, nostrum beatae ea architecto accusantium nemo aliquid? Modi dolore obcaecati
          ratione voluptatibus, porro omnis doloremque laboriosam architecto cupiditate magnam nemo minus
          quidem ex explicabo aut iste qui debitis dolorem inventore aliquid! Delectus dolorem quia ex
          quibusdam ipsam commodi voluptas impedit! Accusantium eius neque odio dolore, esse repudiandae,
          odit commodi maiores perspiciatis autem officia provident, voluptates quas non quae?
          Repellat facilis reiciendis reprehenderit? Omnis laboriosam labore adipisci, numquam a
          pariatur corporis officiis atque debitis itaque reiciendis quod laudantium sed et ipsa obcaecati nam
          sapiente sit error.</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, et quas?
           Laborum nam voluptatibus aliquam, aspernatur fugit eaque aut? Aliquid, earum consequuntur et,
            ut laborum accusantium velit maxime sequi non asperiores eos unde omnis aspernatur vel, 
            veritatis sit eaque eum dolor. Vitae, provident ipsum iste dignissimos minus expedita nulla.
             Incidunt ex deserunt quasi distinctio nulla soluta esse veritatis illum? Qui in nesciunt eaque
             , ea id nulla quo saepe soluta voluptas, quod laborum nostrum voluptatem nobis hic, ex labore
              deleniti? Nihil illum porro qui recusandae voluptatem pariatur! Consequuntur ullam earum
               officiis quos iusto dolorum, accusantium voluptas facilis minima consectetur numquam eius!</p>
      </Box>
    </Layout>
  )
}

export default About
