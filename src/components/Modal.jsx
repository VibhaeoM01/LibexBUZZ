import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({setdata,data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const [input,setinput]=useState({coursename:'vibhaeo',srcval:''});

  const setData=()=>
  {
    setdata([...data,{name:input.coursename,clr:'bg-purple-500',bclr:'bg-purple-200'}]);
    handleClose();
  }

  const Handleipdata=(e)=>
  {
    setinput({...input,[e.target.name]:e.target.value});
  }
  return (
    
    <div>
      <Button onClick={handleOpen}>New Course</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='h-[400px] flex justify-center items-center bg-red-100 flex-col'>
            <label htmlFor="">{input.coursename}</label><input type="text" name='coursename' value={input.coursename} onChange={Handleipdata}/>
            <label htmlFor="">src</label><input type="text" name='srcval' value={input.srcval} onChange={Handleipdata}/>
            <button className='mt-10 border border-black px-3 py-2' onClick={setData}>Add</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
