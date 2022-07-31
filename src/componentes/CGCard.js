import { Card, CardContent, Typography } from "@mui/material";

const CGCard = ({
    title,
    children
}) => {
    return (
        <Card variant="outlined" sx={{ backgroundColor: '#f6a478', borderRadius: 3}}>
            <CardContent>
                <Typography 
                    variant="h6"
                    sx={{ borderRadius: 2, backgroundColor: '#f09a6c', p: 1 }}
                >
                    {title}
                </Typography>
                <Typography mt={1} sx={{ fontWeight: 'bold' }}>
                    {children}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CGCard;