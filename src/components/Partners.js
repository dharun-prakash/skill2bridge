import React from "react";
import { Container, Grid, Typography, Card, CardContent, Box } from "@mui/material";

const partners = [
  { name: "ISBM University Raipur (C.G.)" },
  { name: "Capital University" },
  { name: "Himalayan Garhwali" },
  { name: "Kalinga University" },
  { name: "Glocal University" },
  { name: "Neftu University" },
  { name: "Sikkim Professional University" },
  { name: "Vinayaka Mission University (Distance University)" },
  { name: "Sikkim Alpine University" },
  { name: "MATS University" },
  { name: "CTU University" },
  { name: "Suresh Gyan Vihar (Distance)" },
];

const Partners = () => {
  return (
    <section className="partners-section">
      <Box sx={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #0B1F3B 0%, #1A2A4F 100%)" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" color="#E8C27D" mb={4}>
          Our Partner Universities
        </Typography>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {partners.map((partner, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card
                  elevation={6}
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="h6" fontWeight="bold" color="#1A2A4F" sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}>
                      {partner.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Partners;