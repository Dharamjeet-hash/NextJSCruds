"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid, Button } from '@mui/material';
import WithAuth from "../component/HOC/WithAuth";
import {fetchUsersRequest} from '../utils/apiRequest/users'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


function Users(){
    const [users, setUsers] = useState<any[]>([])
    const router = useRouter();
    useEffect(()=>{
        fetchUsersRequest().then((res)=>{
            if(res?.status == 200){
                console.log(res?.data)
                setUsers(res?.data?.users)
            }
        }).catch((error: any)=>{
            if(error?.response?.data?.status == 401){
                router.push('/login');
            }
        })
    },[])

    function handleLogout(){
        toast.success('Logout Successfully')
        localStorage.removeItem('token')
        router.push('/');
    }
    return (
        <Grid container style={{ height: '100vh' }}>
            {/* <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleLogout} style={{ marginBottom: '20px' }}>
                    Logout
                </Button>
            </Grid> */}
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Button variant="contained" color="primary" onClick={handleLogout} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                        Logout
                    </Button>
                    <Table>
                        <TableHead>
                        <TableRow>
                        <TableCell colSpan={4}>
                            <Typography variant="h5" gutterBottom>
                                Users
                            </Typography>
                        </TableCell>
                        </TableRow>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.map((item,index)=>{
                                return (
                                <TableRow key={index}>
                                    <TableCell>{item?._id}</TableCell>
                                    <TableCell>{item?.name}</TableCell>
                                    <TableCell>{item?.email}</TableCell>
                                </TableRow>
                                )
                            })}
                            {/* Add more rows as needed */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default WithAuth(Users)