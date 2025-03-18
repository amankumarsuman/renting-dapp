import React from "react";
import { Container, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

function Partners() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Swiper
            loop={true}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              520: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <img
                src={require("../../images/partners/stellar.png")}
                alt="Stellar"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/partners/blockport.png")}
                alt="Blockport"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/partners/fantom.png")}
                alt="Fantom"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/partners/onfido.png")}
                alt="Onfido"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/partners/tr.png")}
                alt="TR"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../../images/partners/qa.png")}
                alt="QA"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </motion.div>
  );
}

export default Partners;