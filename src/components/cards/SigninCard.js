import { Card, CardContent, TextField } from '@mui/material';

export default function SigninCard({userData, setUserData}) {
    const handleChange = (event) => {
        setUserData({
            ...userData,
            user: event.target.value
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