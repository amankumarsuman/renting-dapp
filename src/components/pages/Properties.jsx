import React, { useState } from "react";
import { Container, Button, Card, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
// import CountDown from "../components/functions/CountDown";
import { motion } from "framer-motion";
// import AnimationTitles from "../components/functions/AnimationTitles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CountDown from "../../utils/Countdown";
import AnimationTitles from "../../utils/AnimationTitles";

function Properties() {
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("Cottage");

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box sx={{  py: 4 }}>
      <Container>
        <AnimationTitles title="Discover more properties" />
        {/* Tabs */}
        <Box sx={{ my: 4 }}>
          <Swiper
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            {["All", "Cottage", "Chalet", "Manor", "Penthouse", "Farmhouse", "Duplex"].map(
              (tab) => (
                <SwiperSlide key={tab}>
                  <Button
                    variant={activeTab === tab ? "contained" : "outlined"}
                    onClick={() => handleTabClick(tab)}
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      bgcolor: activeTab === tab ? "primary.main" : "transparent",
                      color: activeTab === tab ? "white" : "text.primary",
                    }}
                  >
                    {tab}
                  </Button>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </Box>
        {/* Cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {[
              {
                image: require("../../images/properties/picture-of-a-wooden-building-in-the-forest.webp"),
                title: "Cottage «Forrest 1»",
                agency: "@Red Oak Realty",
                time: { h: 9, m: 45, s: 8 },
                bid: "29.71 ETH",
              },
              {
                image: require("../../images/properties/pexels-stan-krotov-12737424 1.webp"),
                title: "Freshness",
                agency: "@ERA Ukraine Real Estate",
                time: { h: 29, m: 15, s: 10 },
                bid: "14.81 ETH",
              },
              // Add more properties as needed
            ].map((property, index) => (
              <SwiperSlide key={index}>
                <Card sx={{ bgcolor: "background.paper", borderRadius: 2 }}>
                  <Box sx={{ p: 2 }}>
                    <Box sx={{ position: "relative" }}>
                      <img
                        src={property.image}
                        alt={property.title}
                        style={{ width: "100%", borderRadius: 8 }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          cursor: "pointer",
                        }}
                        onClick={handleLike}
                      >
                        {liked ? (
                          <FavoriteIcon sx={{ color: "red" }} />
                        ) : (
                          <FavoriteBorderIcon sx={{ color: "white" }} />
                        )}
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ color: "text.primary", mt: 2 }}>
                      {property.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {property.agency}
                    </Typography>
                    <Box sx={{ display: "flex", mt: 2 }}>
                      <Box sx={{ mr: 3 }}>
                        <CountDown
                          h={property.time.h}
                          m={property.time.m}
                          s={property.time.s}
                        />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          Remaining Time
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: "text.primary" }}>
                          {property.bid}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          Current Bid
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Properties;