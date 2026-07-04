import { Box, Avatar, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

function Header() {
  return (
    <Box
      sx={{
        height: 75,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        background: "#111827",
        borderBottom: "1px solid #1F2937",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#00E5FF",
            color: "black",
            width: 45,
            height: 45,
          }}
        >
          <SmartToyIcon />
        </Avatar>

        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="white"
          >
            Aravin AI
          </Typography>

          <Typography
            variant="body2"
            color="#9CA3AF"
          >
            AI Assistant
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
