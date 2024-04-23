"use client"

import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import WithoutAuth from "../component/HOC/WithoutAuth";
import {registerRequest} from '../utils/apiRequest/auth'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-toastify';

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name:''
    });

    const router = useRouter();
    const [formErrors, setFormError] = useState<any>({})

    const handleFieldChange = (e: any) => {
        const { name, value } = e.target;
        setFormError({...formErrors,[name]:''})
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegister = (e: any) => {
        e.preventDefault();
        registerRequest(formData).then((res)=>{
            if(res.status == 201){
              setFormError({})
              setFormData({email:'', password:'', name:''})
              toast.success('Register Successfully')
              router.push('/');
      
            }
          }).catch((error)=>{
            let errors = error?.response?.data?.errors
            setFormError(errors)
          })
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={10} sm={6} md={4} lg={3}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Register
                    </Typography>
                    <form onSubmit={handleRegister}>
                        <TextField
                            label="Name"
                            type="text"
                            name="name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={formData.name}
                            onChange={handleFieldChange}
                        />
                        {formErrors?.name && <div style={{ color: 'red' }}>{formErrors.name}</div>}
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={formData.email}
                            onChange={handleFieldChange}
                        />
                        {formErrors?.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={formData.password}
                            onChange={handleFieldChange}
                        />
                        {formErrors?.password && <div style={{ color: 'red' }}>{formErrors.password}</div>}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            style={{ marginTop: '20px' }}
                        >
                            Register
                        </Button>
                        <p>Already have account? <Link href="/login">Login</Link></p>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default WithoutAuth(Register);
