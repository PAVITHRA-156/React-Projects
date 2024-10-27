import React, { useState, useEffect } from 'react';
import images1 from './images/girl1.png';
import './manage.css';
import { Button, TextField, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import Axios from 'axios';
import Side from './side';

function Manage() {
    const [add, setAdd] = useState([]);
    const [Product, setProduct] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Status, setStatus] = useState('Added to stock');

    useEffect(() => {
        Axios.get('http://localhost:3000/add').then(res => setAdd(res.data));
    }, []);

    const Add = () => {
        if (Product.trim() === '' || Quantity.trim() === '') {
            alert("Product and Quantity must be filled");
            return;
        }
        if (isNaN(Quantity)) {
            alert("Quantity should be a number");
            return;
        }
        Axios.post('http://localhost:3000/add', { Product: Product, Quantity: Quantity, Status: Status }).then(res => setAdd([...add, res.data]));
        setProduct('');
        setQuantity('');
        setStatus('Added to stock');
    };

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3000/add/${id}`).then(() => {
            setAdd(add.filter(item => item.id !== id));
        });
    };

    return (
        <div className='mana'>
            <div className='mn'>
                <Side />
                <Grid container spacing={10}>
                    <Grid item sx={6}>
                        <div className='tb'>
                            <FormControl fullWidth>
                                <InputLabel id="product-label">Product</InputLabel>
                                <Select
                                    labelId="product-label"
                                    value={Product}
                                    onChange={(e) => setProduct(e.target.value)}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value="Laptop - Dell">Laptop - Dell</MenuItem>
                                    <MenuItem value="Laptop - HP">Laptop - HP</MenuItem>
                                    <MenuItem value="Mobile - iPhone">Mobile - iPhone</MenuItem>
                                    <MenuItem value="Mobile - Samsung">Mobile - Samsung</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                value={Quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                label="Quantity"
                                style={{ marginTop: "20px" }}
                            />
                            <br />
                            <Button variant='contained' color="primary" onClick={Add} style={{ marginLeft: "50px", marginTop: "10px" }}>Enter</Button>
                        </div>
                        <br /><br />
                        <div className='cw'>
                            <div className='ls'>
                                <table border={"1px"} cellPadding={"20px"} cellSpacing={"10px"} className='tab'>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {add
                                            .filter(us => us.Product && us.Quantity && us.Status).map((us) => (
                                                <tr key={us.id}>
                                                    <td>{us.Product}</td>
                                                    <td>{us.Quantity}</td>
                                                    <td>{us["Status"]}</td>
                                                    <td>
                                                        <Button variant='contained' color='error' onClick={() => handleDelete(us.id)}>Delete</Button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sx={6}>
                        <div className='rs'>
                            <img src={images1} className='img1' alt="Product" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Manage;
