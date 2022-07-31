import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const CGImageCard = ({
    imgSrc,
    imgHeight,
    imgWidth,
    imgPadding,
    title,
    content
}) => {
    return (
        <Card>
            <CardMedia
                component="img"
                image={imgSrc}
                sx={
                    { width: imgWidth, height: imgHeight,  
                        backgroundColor: "#9b5e8f", 
                        p: imgPadding ? imgPadding : 0 }
                }
            />
            { (title || content) &&
            <CardContent sx={{textAlign: 'center', backgroundColor: 'secondary.light'}}>
                <Typography gutterBottom variant="h5" sx={{backgroundColor: 'secondary.dark'}}>
                    {title}
                </Typography>
                <Typography variant="p">
                    {content}
                </Typography>
            </CardContent>}
        </Card>        
    );
};

export default CGImageCard;