import React from 'react'
import PropTypes from 'prop-types';
import {Box, Typography, Button } from '@mui/material';

export  const TitledContainerWithButton=({containerTitle,buttonTitle,children})=> {

  return (  
    
    <Box container display={'flex'} flexDirection={'column'} sx={{
      paddingBlock:"0.2rem",
      paddingLeft:"1rem",
      marginBlock:'1rem',
    }} >

      <Box sx={{
        display:"flex",marginBlockEnd:".5rem",
        justifyContent:"space-between",
        alignItems:"baseline"
      }}>

        <Typography 
       
         sx={{
                color: "dark.main",
                fontWeight: "fontWeightLabelSmall",
                fontSize: { xs: " 0.875rem",sm:"1.2rem", md: "1.4rem" },
            }}>
              
           {containerTitle}
            
         </Typography>

        {
        (buttonTitle)?
        <Button variant='text'>

          <Typography px={'0.5rem'} sx={{
            fontWeight:"fontWeightMedium",
            fontSize: { xs: " 0.875rem",sm:"1rem", md: "1.2rem" },

             
          }}>{buttonTitle}
            </Typography>

          </Button>
          
        :null
        }
        
      </Box>

        {children}

    </Box>

  )

}

TitledContainerWithButton.propTypes={
  children:PropTypes.any.isRequired,
    containerTitle:PropTypes.string.isRequired,
    buttonTitle:PropTypes.string,
}
