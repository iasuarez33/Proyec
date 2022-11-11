// Se importan las dependencias necesarias para el proyecto. 
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2'
import Modal from './modal';
import axios from 'axios';
// Declaración de variables de entorno
function Form (){
const [tipDoc, settipDoc] = React.useState('');
const [mail, setValMail] = React.useState('');
const [docId, setdocId] = React.useState('');
const [nomUser, setnomUser] = React.useState('');
const [apellUser, setapellUser] = React.useState('');
const [cell, setCell] = React.useState('');
const [refe, setrefe] = React.useState('');
const [des, setdes] = React.useState('');
const [valor, setvalor] = React.useState('');
let valForm = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(valor);
const fecha = new Date();
let Fecha = fecha.toLocaleString();
const handleTipoDoc = (event) => {settipDoc(event.target.value);};
const handleMail = (event)=>{setValMail(event.target.value);};
const handleDocId = (event)=>{setdocId(event.target.value);};
const handleNom = (event)=>{setnomUser(event.target.value);};
const handleApell = (event)=>{setapellUser(event.target.value);};
const handleCell = (event)=>{setCell(event.target.value);};
const handleRefe = (event)=>{setrefe(event.target.value);};
const handleValor = (event)=>{setvalor(event.target.value);};
const handleDes = (event)=>{setdes(event.target.value);};
const Data = {
    'nombre':nomUser,
    'NumDoc':docId,
    'apellido':apellUser,
    'mail':mail,
    'valor':valor,
    'refe':refe,
    'fecha':Fecha,
    'descrip':des,
}
//Impresión del formulario para ingreso de información. 
    return(
        <>
            <Box>   
                <Grid container spacing={3}>
                    <Grid xs={12}>
                        <div className="navbar">
                        <h1 className='text'>Pasarela de pago</h1>
                        </div>
                    </Grid> 
                    <Grid item xs={7}>
                        <h1 className='text blue'>Datos del titular</h1>
                        <p  className='text grey'>Ingresa los datos de la persona que realizara el pago</p>
                        <div className='box'>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <TextField onChange={handleRefe} label="Referencia" focused placeholder="ej: 59766030f5575d"/>
                            <TextField onChange={handleValor} label="Valor a pagar" variant="outlined" type='number' /> 
                            <TextField onChange={handleDes} label="Descripción"/>
                            <TextField  onChange={handleMail} type='email' label="Email" focused  placeholder="example@example.com"/>
                            <Select
                            focused
                            id="demo-simple-select"
                            value={tipDoc}
                            onChange={handleTipoDoc}
                            >
                            <MenuItem value='CC'>Cedula de ciudadania</MenuItem>
                            <MenuItem value='CE'>Cedula de extranjeria</MenuItem>
                            <MenuItem value='TI'>Tarjeta de identidad</MenuItem>
                            <MenuItem value='NIT'>Numero de identificaion tributaria</MenuItem>
                            <MenuItem value='RUT'>Reguistro unico triburatio</MenuItem>
                            </Select>
                            <TextField onChange={handleDocId} label="Documento Identidad" variant="outlined" type='number' /> 
                            <TextField onChange={handleNom} label="Nombre"/>
                            <TextField onChange={handleApell} label="Apellidos"/>
                            <TextField  label="Celular" variant="outlined" type='number' placeholder="ej:30061000000" focused/> 
                            <Modal Data={Data}/>
                            
                        </Stack>
                    </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div className="card">
                            <div className="subcard">
                                <p>Total a pagar</p>
                                <h1>$ {valForm}</h1>
                            </div>
                            <div className="cont">
                                <label>Referencia</label>
                                <p className='bold'>{refe}</p>
                            </div>
                            <div className="cont">
                                <label>Descripción</label>
                                <p className='bold'>{des}</p>
                            </div>
                            <div className="cont">
                                <label>Fecha</label>
                                <p className='bold'>{Fecha}</p>
                            </div>
                            <div className="cont radius-boton">
                                <label>Sesión</label>
                                <p className='bold'>784</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box> 
            
        </>
    )
}
export default Form;