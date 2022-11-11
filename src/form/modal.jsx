// Se importan las dependencias necesarias para el proyecto. 
import { useState, useEffect, useCallback } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import {
    TableCell,
    TableRow,
    Grid,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Typography,
    Button,

    } from '@mui/material';
function Modals (Data) {
const [opent, setOpent] = useState(false);
const [data, setData] = useState();
const bitacora= () => {
setOpent(true);
};
const bitacoraClose = () => {
setOpent(false);
};
// Conexión con API placetopay
const Validation = () =>{
    if(!Data.Data.nombre|!Data.Data.NumDoc|!Data.Data.valor
        |!Data.Data.apellido|!Data.Data.mail|!Data.Data.descrip){
        return <Alert severity="error">Error en la Transacción!</Alert>
    }else{
        var options = {
            method: 'POST',
            url: 'https://stoplight.io/mocks/placetopay-api/webcheckout-docs/10862976/api/session',data:{
                p:'p'
            }
          };
          
          axios.request(options).then(function (response) {
            setData(response.data.status.message)
            
          }).catch(function (error) {
            console.error(error);
          });
          return <Alert severity="success">{data}:Transacción Exitosa¡!</Alert>
    }
}
// Fin de conexión

// Modal impresión estado de la transacción
    return(
        <>
            <div>
            <Button onClick={bitacora}  variant="contained"><span className='check'>></span>Continuar</Button>
            <Dialog
            maxWidth="md"
            open={opent}
            onClose={bitacoraClose}
            >
            <DialogTitle
            sx={{
            p: 3
            }}
            >
            <Typography variant="h5" gutterBottom>
            <label>Nombre Usuario: {Data.Data.nombre}</label>
            </Typography>
            </DialogTitle>
            <form>
            <DialogContent>
            <Grid item xs={12} md={12}>
            <tbody>
            <TableCell>{('Num documento')}</TableCell>
            <TableCell>{('Nombre')}</TableCell>
            <TableCell>{('Apellido')}</TableCell>
            <TableCell>{('Email')}</TableCell>
            <TableCell>{('Valor')}</TableCell>
            <TableCell>{('Fecha')}</TableCell>
            <TableCell>{('Descripción')}</TableCell>
            <TableRow key={Data}>
            <TableCell>{Data.Data.NumDoc}</TableCell>
            <TableCell>{Data.Data.nombre}</TableCell>
            <TableCell>{Data.Data.apellido}</TableCell>
            <TableCell>{Data.Data.mail}</TableCell>
            <TableCell>{Data.Data.valor}</TableCell>
            <TableCell>{Data.Data.fecha}</TableCell>
            <TableCell>{Data.Data.descrip}</TableCell>
            </TableRow> 
            </tbody>
            </Grid>
            </DialogContent>
            <DialogActions
            sx={{
            p: 3
            }}
            >
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Validation/>
            </Stack>
            </DialogActions>
            </form>
            </Dialog>
        </div>
        </>
    )
}
export default Modals;