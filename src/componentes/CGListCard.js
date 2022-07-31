import { List, ListItemText, Typography } from "@mui/material";

import CGCard from "./CGCard";

const CGListCard = ({ children, title }) => {
    return (
        <CGCard title={title}>
            <List>
                {children.map(child => 
                    <ListItemText>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {child}
                        </Typography>
                    </ListItemText>
                )}
            </List>
        </CGCard>
    );
};

export default CGListCard;