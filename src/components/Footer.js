import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
  AccessTime,
} from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#002147",
        color: "white",
        padding: "4rem 1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="space-between">
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", padding: 0, mt: 2 }}>
              {[
                { label: "Home", to: "home-section" },
                { label: "About Us", to: "about-section" },
                { label: "Programmes", to: "bvoc-section" },
                { label: "Admission Form", to: "admission-section" },
              ].map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={1000}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                      display: "block",
                      padding: "0.5rem 0",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      "&:hover": { color: "#00aaff" },
                    }}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
              <Link
                to="/certificate-verification"
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  display: "block",
                  padding: "0.5rem 0",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  "&:hover": { color: "#00aaff" },
                }}
              >
                Certificate Verification
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box display="flex" alignItems="center" mb={1.5}>
                <Email fontSize="small" sx={{ mr: 1, color: "#00aaff" }} />
                <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                  info@skill2bridge.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1.5}>
                <Phone fontSize="small" sx={{ mr: 1, color: "#00aaff" }} />
                <Typography variant="body2" sx={ { fontSize: { xs: "0.85rem", md: "0.9rem" }}}>
                  +91 9159376123
                </Typography>
              </Box>
              <Box display="flex" alignItems="flex-start" mb={1.5}>
                <LocationOn fontSize="small" sx={{ mr: 1, color: "#00aaff" }} />
                <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                  No. 204, Udayappa Colony,
                  <br />
                  Shankar Nagar, Salem 636007,
                  <br />
                  Tamil Nadu, India
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1.5}>
                <AccessTime fontSize="small" sx={{ mr: 1, color: "#00aaff" }} />
                <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                  Mon-Fri: 09:00 AM - 06:00 PM
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* International Collaboration - Sri Lanka */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              International Collaboration - Sri Lanka
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box display="flex" alignItems="flex-start" mb={1.5}>
                <LocationOn fontSize="small" sx={{ mr: 1, color: "#00aaff" }} />
                <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                  Apax Campus,
                  <br />
                  No: 32, Dr. E.A. Cooray Mawatha,
                  <br />
                  Wellawatta, Colombo 06,
                  <br />
                  Sri Lanka
                </Typography>
              </Box>
              <Box display="flex" alignItems="flex-start" mb={1.5}>
                <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                  <strong>Contact Person:</strong>
                  <br />
                  M.M. Munas Mohamed, NDT, B.A, PGDE, MED
                  <br />
                  (Country Head)
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1.5}>
                <Phone fontSize="small" sx={{ mr: 1, color: "#00aaff" }} />
                <Typography variant="body2" sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" } }}>
                  +94 775397312
                  <br />
                  +94 754566819
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Connect With Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Connect With Us
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontSize: { xs: "0.85rem", md: "0.9rem" }, mb: 2 }}
            >
              Send an enquiry to get updates on new courses & offers.
            </Typography>
            <ScrollLink
              to="admission-section"
              smooth={true}
              duration={1000}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0056c1",
                  "&:hover": { backgroundColor: "#004494" },
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  padding: { xs: "8px 16px", md: "10px 20px" },
                }}
              >
                Enquire Now
              </Button>
            </ScrollLink>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3} sx={{ textAlign: { xs: "left", md: "center" } }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "center" }, gap: 1, mt: 2 }}>
              {[
                { icon: <Facebook />, link: "#" },
                { icon: <LinkedIn />, link: "#" },
                { icon: <Instagram />, link: "#" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "white",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.2)", color: "#00aaff" },
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Bar */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: { xs: 3, md: 4 }, pt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" }, textAlign: { xs: "center", md: "left" } }}
            >
              © 2025 Skill2Bridge. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" }, textAlign: { xs: "center", md: "right" } }}
            >
              Developed by Noorul
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;