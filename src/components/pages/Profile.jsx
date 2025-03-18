import React from "react";
import { useActiveAccount } from "thirdweb/react";
import { Typography, Avatar, Box } from "@mui/material";

function ProfilePage() {
  const account = useActiveAccount();

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Profile Details
      </Typography>
      <Avatar
        alt={account?.name}
        src={account?.avatar}
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />
      <Typography variant="body1">
        <strong>Name:</strong> {account?.name}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {account?.email}
      </Typography>
      <Typography variant="body1">
        <strong>Wallet Address:</strong> {account?.address}
      </Typography>
    </Box>
  );
}

export default ProfilePage;