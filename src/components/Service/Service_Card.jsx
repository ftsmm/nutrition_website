import React from "react";
import "./ServiceCard.css"; // Özel stil dosyanız
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ServiceCard = ({ title, description, image, detail }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Accordion style={{ width: '100%', maxWidth: '600px' }}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Typography style={{ flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '5px' }}>
            Daha fazla bilgi
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {detail}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
};

export default ServiceCard;
