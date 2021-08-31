import React from 'react'
import './MyOrders.css';
import Grid from '@material-ui/core/Grid';
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Paper } from '@material-ui/core';


export default function MyOrders() {
    return (
        <div className="container" >
            <h1 style={{ paddingBottom: 20, marginTop: "5%", fontFamily: "Quicksand", }} >My Orders</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={8} sm container>
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 600, fontSize: '22px', lineHeight: '27px', }} >Date</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 600, fontSize: '22px', lineHeight: '27px', }} >Order Id</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 600, fontSize: '22px', lineHeight: '27px', }} >Amount</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 600, fontSize: '22px', lineHeight: '27px', }} >Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', }} >20-05-21</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', color: '#005FED' }} >Id - 1010</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', }} >Rs. 899</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', color: '#C46404' }} >Deliverd</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', }} >20-05-21</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', color: '#005FED' }} >Id - 1009</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', }} >Rs. 865</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', color: '#C46404' }} >Deliverd</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', }} >20-05-21</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', color: '#005FED' }} >Id - 1008</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', }} >Rs. 865</TableCell>
                                    <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '18px', lineHeight: '22px', color: '#C46404' }} >Deliverd</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>


            <Grid item xs={12} md={12} lg={8} sm container>
                <TableContainer style={{ background: '#f5f5f5', }} component={Paper} >
                    <Table style={{ width: '70%' }} >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 600, fontSize: '18px', lineHeight: '22px', borderBottom: 'none' }} >Product Name</TableCell>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 600, fontSize: '18px', lineHeight: '22px', borderBottom: 'none' }} >Quantity</TableCell>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 600, fontSize: '18px', lineHeight: '22px', borderBottom: 'none' }} >Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >Cabbage</TableCell>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >1kg</TableCell>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >Rs.35</TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >Onion</TableCell>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >2kg</TableCell>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >Rs. 65</TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >Brinjal</TableCell>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >1kg</TableCell>
                                <TableCell style={{ fontFamily: 'Quicksand', fontStyle: 'normal', fontWeight: 'normal', fontSize: '16px', lineHeight: '20px', borderBottom: 'none' }} >Rs. 25</TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>



        </div>
    )
}


