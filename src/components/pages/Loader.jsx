import React from "react";
import { Button, Card, Container, Typography, Box, Grid, useTheme } from "@mui/material";
// import CountDown from "../components/functions/CountDown";
import { motion } from "framer-motion";
// import AnimationTitles from "../components/functions/AnimationTitles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CountDown from "../../utils/Countdown";
import AnimationTitles from "../../utils/AnimationTitles";

function Loading() {
  // Like button functionality
  const theme=useTheme()
  const [liked, setLiked] = React.useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Box sx={{ position: "relative",bgcolor:theme.palette.background.default,color:theme.palette.text.primary }}>
      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            // display:"flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            mt: 0,
          }}
        >
          {/* Left Section */}
          <Grid item xs={12} md={6} lg={6}>
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AnimationTitles title="Future of real estate investing" />
              <Typography variant="body1" sx={{  mt: 2 }}>
                Our real estate is virtual property you can purchase on a metaverse
                platform
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 3, px: 5, py: 2, fontWeight: "bold" }}
              >
                Explore
              </Button>
              <Box
                sx={{
                  color: "white",
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    12K+
                  </Typography>
                  <Typography variant="body2" >
                    properties
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    10K+
                  </Typography>
                  <Typography variant="body2" >
                    auction
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    12K+
                  </Typography>
                  <Typography variant="body2" >
                    developers
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} lg={6}>
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
                {/* Card 1 */}
                
                <Card sx={{ bgcolor: "black", borderRadius: 2 }}>
                  <Box sx={{ p: 2 }}>
                    <Box sx={{ position: "relative" }}>
                      <img
                        src={require("../../images/properties/house_big-1.webp")}
                        alt="Residence Rybna"
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
                    <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
                      Residence Rybna
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      @UA real estate agency
                    </Typography>
                    <Box sx={{ display: "flex", mt: 2 }}>
                      <Box sx={{ mr: 3 }}>
                        <CountDown h={18} m={21} s={8} />
                        <Typography variant="body2" sx={{ color: "gray" }}>
                          Remaining Time
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: "white" }}>
                          29.71 ETH
                        </Typography>
                        <Typography variant="body2" sx={{ color: "gray" }}>
                          Current Bid
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>

                {/* Card 2 */}
                <Card sx={{ bgcolor: "black", borderRadius: 2 }}>
                  <Box sx={{ p: 2 }}>
                    <Box sx={{ position: "relative" }}>
                      <img
                        src={require("../../images/properties/house_big.webp")}
                        alt="Blue Sky"
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
                    <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
                      Blue Sky
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      @ERA Ukraine Real Estate
                    </Typography>
                    <Box sx={{ display: "flex", mt: 2 }}>
                      <Box sx={{ mr: 3 }}>
                        <CountDown h={23} m={16} s={11} />
                        <Typography variant="body2" sx={{ color: "gray" }}>
                          Remaining Time
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: "white" }}>
                          17.31 ETH
                        </Typography>
                        <Typography variant="body2" sx={{ color: "gray" }}>
                          Current Bid
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </motion.div>
          </Grid>

          {/* Mobile Features Section */}
          <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  mt: 4,
                }}
              >
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    12K+
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    properties
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    10K+
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    auction
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    12K+
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    developers
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Loading;

// import React from 'react';

// export default function Loading() {
//     return (
//       <div className="w-full min-h-screen bg-[#0c0c20] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24">
        
//         {/* Left Section */}
//         <div className="md:w-1/2 space-y-6 text-center md:text-left z-30">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Future of real estate investing
//           </h1>
//           <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0">
//             Our real estate is virtual property you can purchase on a metaverse platform
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-md">
//             Explore
//           </button>
  
//           {/* Stats */}
//           <div className="flex flex-wrap md:flex-nowrap gap-6 mt-10 justify-center md:justify-start">
//             <div className="text-center">
//               <h2 className="text-2xl md:text-3xl font-bold">12K+</h2>
//               <p className="text-gray-400 text-sm md:text-base">Properties</p>
//             </div>
//             <div className="text-center">
//               <h2 className="text-2xl md:text-3xl font-bold">10K+</h2>
//               <p className="text-gray-400 text-sm md:text-base">Auctions</p>
//             </div>
//             <div className="text-center">
//               <h2 className="text-2xl md:text-3xl font-bold">12K+</h2>
//               <p className="text-gray-400 text-sm md:text-base">Developers</p>
//             </div>
//           </div>
//         </div>
  
//         {/* Right Section - Image Cards */}
//         <div className="md:w-1/2 relative flex justify-center items-center mt-16 md:mt-0">
//           {/* First Card */}
//           <div className="absolute left-8 top-0 transform -rotate-6 z-10 shadow-2xl rounded-xl overflow-hidden w-[220px] md:w-[260px]">
//             <img
//               src={require("../../images/properties/house_big.webp")}
//               alt="Residence Rybnaya"
//               className="w-full h-48 object-cover"
//             />
//             <div className="bg-[#1a1a2c] p-4">
//               <h3 className="font-semibold">Residence Rybnaya</h3>
//               <p className="text-sm text-gray-400">@UA real estate agency</p>
//               <div className="mt-2 text-sm text-gray-300">
//                 <p>18h : 20m : 53s</p>
//                 <p>25.12 ETH</p>
//               </div>
//             </div>
//           </div>
  
//           {/* Second Card */}
//           <div className="absolute right-8 top-10 transform rotate-6 z-20 shadow-2xl rounded-xl overflow-hidden w-[220px] md:w-[260px]">
//             <img
//               src={require("../../images/properties/house_big-1.webp")}
//               alt="Blue Sky"
//               className="w-full h-48 object-cover"
//             />
//             <div className="bg-[#1a1a2c] p-4">
//               <h3 className="font-semibold">Blue Sky</h3>
//               <p className="text-sm text-gray-400">@ERA Ukraine Real Estate</p>
//               <div className="mt-2 text-sm text-gray-300">
//                 <p>23h : 15m : 56s</p>
//                 <p>17.31 ETH</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  