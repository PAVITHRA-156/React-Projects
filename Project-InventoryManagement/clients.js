import React from "react";
import { Card, CardMedia, CardContent, Grid, Typography, Button, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Side from "./side";
import './client.css';


function ClientCard({ client }) {
  return (
    <Card sx={{ maxWidth: 300, textAlign: "center", p: 3 }}>
      <CardMedia
        component="img"
        image={client.logo}
        alt={client.name}
        sx={{ width: 100, height: 100, margin: "auto" }}
      />
      <CardContent>
        <Typography variant="h6">{client.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {client.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          <LocationOnIcon fontSize="small" /> Location: {client.location}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: "italic" }}>
          "{client.testimonial}"
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={client.website}
          target="_blank"
          sx={{ mt: 2 }}
        >
          Visit Website
        </Button>
      </CardContent>
    </Card>
  );
}

function Clients() {
  const clients = [
    {
      id: 1,
      name: "ABC Corp",
      description: "Leading provider in tech solutions.",
      location: "New York, USA",
      testimonial: "ABC Corp has been a trusted partner. Their service is top-notch!",
      website: "https://abc-corp.com",
      logo: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg", 
    },
    {
      id: 2,
      name: "XYZ Tech",
      description: "Innovative solutions in AI and cloud services.",
      location: "San Francisco, USA",
      testimonial: "XYZ Tech has transformed our infrastructure.",
      website: "https://xyz-tech.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/330px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg", // Replace with actual logo URL
    },
    {
      id: 3,
      name: "Global Ventures",
      description: "Consulting for multinational enterprises.",
      location: "London, UK",
      testimonial: "Their consulting services have boosted our growth significantly.",
      website: "https://globalventures.com",
      logo: "https://st.depositphotos.com/1395424/4860/i/450/depositphotos_48607207-stock-photo-office-buildings.jpg", // Replace with actual logo URL
    }
  ];

  return (
    <div className="cli">

   
    <Box sx={{ padding: 10,marginLeft: 20 }}>
        <Side/>
      <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>
        Our Clients
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {clients.map((client) => (
          <Grid item key={client.id}>
            <ClientCard client={client} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}

export default Clients;
