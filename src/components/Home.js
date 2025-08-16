import React from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import { Link } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../Images/image1.jpeg";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.jpeg";
import image5 from "../Images/image5.jpeg";
import image6 from "../Images/image6.jpeg";
import image7 from "../Images/image7.jpeg";
import image8 from "../Images/image8.jpeg";
import image9 from "../Images/image9.jpeg";
import image10 from "../Images/image10.jpeg";
import image11 from "../Images/image11.jpeg";
import image12 from "../Images/image12.jpg";
import image13 from "../Images/image13.jpg";

const Home = () => {
  return (
    <section
      className="home-section"
      style={{
        background: "linear-gradient(135deg, #0B1F3B 0%, #09203F 100%)",
        padding: "60px 0",
        color: "#E8C27D",
      }}
    >
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ textAlign: "center" }}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
              }}
            >
              Empower Your Future with Skill2Bridge
            </Typography>
            <Typography variant="h6" component="p" style={{ marginBottom: "40px", color: "#EAEAEA" }}>
              Bridging Talent with Opportunity
            </Typography>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "#E8C27D",
                color: "#0B1F3B",
                padding: "12px 24px",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
            >
              <Link
                to="contact-section"
                smooth={true}
                duration={2000}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Get in Touch
              </Link>
            </Button>
          </Grid>
        </Grid>

        {/* Carousel Section */}
        <Box mt={5}>
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            swipeable={true}
            emulateTouch
            centerMode={false}
            centerSlidePercentage={100}
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
          >
            {[
              image1,
              image2,
              image3,
              image4,
              image5,
              image6,
              image7,
              image8,
              image9,
              image10,
              image11,
              image12,
              image13,
            ].map((image, index) => (
              <div key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "66.625%", // Aspect ratio: (1066 / 1600) * 100%
                  }}
                >
                  <img
                    src={image}
                    alt={`Skill2Bridge Event ${index + 1}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </div>
            ))}
          </Carousel>
        </Box>

        {/* Mission and Vision Section */}
        <Box mt={5}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" component="h3" gutterBottom style={{ fontWeight: "bold", color: "#E8C27D" }}>
                Our Mission
              </Typography>
              <Typography variant="body1" component="p" style={{ color: "#EAEAEA" }}>
                To provide skill-based education that empowers students with industry-relevant knowledge, practical expertise, and leadership qualities to excel in a dynamic world.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h5" component="h3" gutterBottom style={{ fontWeight: "bold", color: "#E8C27D" }}>
                Our Vision
              </Typography>
              <Typography variant="body1" component="p" style={{ color: "#EAEAEA" }}>
                To create a learner-centric environment that fosters innovation, entrepreneurship, and lifelong learning, shaping future-ready professionals.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Home;