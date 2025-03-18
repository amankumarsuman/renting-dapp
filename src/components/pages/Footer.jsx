import React from "react";
import { Container, Box, Typography, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";

function Footer() {
  const theme=useTheme()
  return (
    <Box component="footer" sx={{ bgcolor:theme.palette.background.default,color:theme.palette.text.primary, py: 5 }}>
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo and Description */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={require("../../images/logo/logo.png")}
                alt="logo"
                style={{ marginBottom: 16 }}
              />
              <Typography variant="body1" >
                Please contact us if you have any specific <br /> idea or request.
              </Typography>
            </motion.div>
          </Grid>

          {/* Company and Social Links */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ display: "flex", gap: 40 }}
            >
              <Box>
                <Typography variant="h6"  sx={{ mb: 2, textTransform: "uppercase" }}>
                  Company
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
                  <li>How it works</li>
                  <li>Market</li>
                  <li>About Us</li>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6"  sx={{ mb: 2, textTransform: "uppercase" }}>
                  Socials
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: 24 }}
        >
          <Typography variant="body2"  align="center">
            © 2023 Renting-Platform. All rights reserved
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Footer;