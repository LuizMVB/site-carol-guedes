import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

const CGAcordiao = (
    {
        title,
        description
    }
) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion sx={{backgroundColor: 'primary.light'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: '100%', flexShrink: 0 }} color="#f7eded">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor: '#5272bbc8'}}>
          <Typography fontSize={18} whiteSpace="pre-line" color="#e4e8f2">
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
}

export default CGAcordiao;