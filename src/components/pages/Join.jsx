import React from "react";
import { Container, Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AnimationTitles from "../../utils/AnimationTitles";
// import AnimationTitles from "../components/functions/AnimationTitles";

function Join() {
  const theme=useTheme()
  return (
    <Box sx={{ bgcolor:theme.palette.background.default,color:theme.palette.text.primary, py: 8 }}>
      <Container>
        <Swiper
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            998: { slidesPerView: 3 },
            1198: { slidesPerView: 4 },
          }}
        >
          {[
            {
              number: "1",
              image: "01.webp",
              title: "Crypto Community",
              description: "Unprecedented access to investment projects in the real economy globally",
            },
            {
              number: "2",
              image: "02.webp",
              title: "Asset Owners",
              description: "Proprietary tools for borderless capital raise",
            },
            {
              number: "3",
              image: "03.webp",
              title: "Registration",
              description: "Absolute data security and maximum transparency of all blockchain-based transactions",
            },
            {
              number: "4",
              image: "04.webp",
              title: "Create Solutions",
              description: "Decentralized community-ran platform for fundraising",
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ p: 3, textAlign: "left" }}>
                <Typography variant="h4"  sx={{ mb: 3 }}>
                  {item.number}
                </Typography>
                <img
                  src={require(`../../images/illustration/${item.image}`)}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
                <AnimationTitles title={item.title} sx={{ my: 3 }} />
                <Typography variant="body1" >
                  {item.description}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

export default Join;