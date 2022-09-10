import React from 'react'
import {Link} from 'react-router-dom'
import {Button,Stack,Typography} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name}/>
        <Button className='exercise-button' sx={{ml:'21px',color:"#fff",background:'#ffa9a9',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize' ,mb:'20px'}}>
            {exercise.bodyPart}
        </Button>

        <Button className='exercise-button' sx={{ml:'21px',color:"#fff",background:'#fcc797',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
            {exercise.target}
        </Button>
        <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="20px" textAlign="center"> 
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard