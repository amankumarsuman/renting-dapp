import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";
import AnimationTitles from "../../utils/AnimationTitles";

function Developers() {
  const theme=useTheme()
  return (
    <Box sx={{ bgcolor:theme.palette.background.default,color:theme.palette.text.primary, py: 8 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3 }}>
        <AnimationTitles title="Our the best developers" align="center" />
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 5 }}>
          The value of real estate can be affected by its utility, project, and
          demand.
        </Typography>

        {/* Swiper for Developers */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: { slidesPerView: 2 },
              596: { slidesPerView: 3 },
              998: { slidesPerView: 4 },
              1198: { slidesPerView: 5 },
            }}
          >
            {[
              { logo: "logo-01.png", name: "UA real house" },
              { logo: "logo-02.png", name: "ERA Ukraine Real Estate" },
              { logo: "logo-03.png", name: "Happy Neighbor" },
              { logo: "logo-04.png", name: "American Home Agents" },
              { logo: "logo-05.png", name: "Ukr Home Agents" },
              { logo: "logo-06.png", name: "UA real estate agency" },
            ].map((dev, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  <img
                    src={require(`../../images/developers/${dev.logo}`)}
                    alt={dev.name}
                    style={{ marginRight: 16 }}
                  />
                  <Typography variant="h6" sx={{color:theme.palette.text.primary}}>
                    {dev.name}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Developers;