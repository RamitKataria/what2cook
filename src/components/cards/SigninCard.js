import { Card, CardContent, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function SigninCard({userData, setUserData}) {
    const handleChange = (event) => {
        setUserData({
            ...userData,
            name: event.target.value
        })
    }

    return (
        <Card>
            <CardContent>
                <TextField
                    id="name"
                    label="Name"
                    onChange={handleChange}
                />
            </CardContent>
        </Card>
    );
}