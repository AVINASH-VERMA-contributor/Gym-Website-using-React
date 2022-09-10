import React,{useState,useEffect} from 'react'
import {Box,Button,Stack,TextField,Typography} from '@mui/material';
import {exerciseOptions,fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [search,setSearch]=useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData=async () =>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
    
    setBodyParts(['all',...bodyPartsData]);      
    }
fetchExerciseData();
  },[])
  

  const handleSearch= async()=>{
      if(search){
        const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

        const searchedExercises=exercisesData.filter(
          (exercise)=> exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        );

      setSearch('');
      setExercises(searchedExercises);
      }

  }

  return (
      <Stack alignItems="center" mt="37px" justifyContent="center"
      p="20px">

        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',
    xs:'30px'}}} mb="50px" textAlign="center">
            Awesome Exercises You <br/> Should Know
        </Typography>
        
        <Box position="relative" mb="72px" >
          <TextField
          height="76px"
          value={search}
          onChange={(e)=>setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx={{
              input:{fontWeight:'700', border:'none' ,borderRadius:'4px'},
              width:{lg:'880px', xs:'350px'},
              backgroundColor:'#FFF',borderRadius:'40px'
          }}
          />  
        <Button variant="contained" color="error" sx={{backgroundColor:'#FF2625',height:'55px',
          width:{lg:'175px'}    
        }}
        
        onClick={handleSearch}
        >
            Search
        </Button>

        </Box>

        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart/>
        </Box>

      </Stack>
  )
}

export default SearchExercises