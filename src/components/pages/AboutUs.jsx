import React from "react";
import { Container, Box, Typography, Button, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import AnimationTitles from "../../utils/AnimationTitles";
// import { useTheme } from "@emotion/react";
// import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  const theme=useTheme()
  return (
    <Box sx={{  py: 8,bgcolor:theme.palette.background.default,color:theme.palette.text.primary }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AnimationTitles title="What is Renting-Platform?" />
              <Typography variant="body1"  sx={{ mb: 4 }}>
                As new technologies like cryptocurrency develop, the real estate
                sector is changing drastically. It is important to understand both
                how these technologies and the traditional real estate market work.
                Governments are unable to comprehend the rapid advancement of
                technology and modify their legal frameworks to accommodate it fast
                enough.
              </Typography>
              <Button variant="contained">Read More</Button>
            </motion.div>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <img
                  src={require("../../images/bohdan-d-fh6o-XkVQG8-unsplash.webp")}
                  alt="img"
                  style={{ width: "50%", borderRadius: 8 }}
                />
                <img
                  src={require("../../images/john-o-nolan-6f_ANCcbj3o-unsplash.webp")}
                  alt="img"
                  style={{ width: "50%", borderRadius: 8 }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <img
                  src={require("../../images/julia-solonina-ci19YINguoc-unsplash.webp")}
                  alt="img"
                  style={{ width: "50%", borderRadius: 8 }}
                />
                <img
                  src={require("../../images/theater-amazonas-manaus.webp")}
                  alt="img"
                  style={{ width: "50%", borderRadius: 8 }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;