"use client"

import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react";
import WithoutAuth from "./component/HOC/WithoutAuth";
import { loginRequest } from './utils/apiRequest/auth'
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { toast } from 'react-toastify';

function Login(){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormError] = useState<any>({})

    const router = useRouter();
    const handleFieldChange = (e: any) => {
        const { name, value } = e.target;
        setFormError({
            ...formErrors,[name]: ''
        })
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = (e: any) => {
        e.preventDefault();
        loginRequest(formData).then((res)=>{
            if(res.status == 200){
              setFormError({})
              setFormData({email:'', password:''})
              localStorage.setItem('token',res?.data?.token)
              toast.success('Login Successfully')
              router.push('/users');
      
            }
          }).catch((error)=>{
            let errors = error?.response?.data?.errors
            setFormError(errors)
          })
        console.log('Logging in with:', formData.email, formData.password);
    };
    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={10} sm={6} md={4} lg={3}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
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
                            Login
                        </Button>
                    </form>
                    <p>Don't have an account? <Link href="/register">Sign up</Link></p>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default WithoutAuth(Login)