import {
  Box,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";


function MessageBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 3,
      }}
    >
      {!isUser && (
        <Avatar
          sx={{
            bgcolor: "#00BCD4",
            mr: 2,
            width: 42,
            height: 42,
          }}
        >
          <SmartToyIcon />
        </Avatar>
      )}

      <Paper
        elevation={0}
        sx={{
          maxWidth: "75%",
          px: 3,
          py: 2,
          borderRadius: 4,
          bgcolor: isUser ? "#00BCD4" : "#1F2937",
          color: "white",
          border: "1px solid #374151",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: 14,
          }}
        >
          {isUser ? "You" : "Aravin AI"}
        </Typography>

        <Typography
          sx={{
            whiteSpace: "pre-wrap",
            lineHeight: 1.8,
            fontSize: 15,
          }}
        >
          {text}
        </Typography>
      </Paper>

      {isUser && (
        <Avatar
          sx={{
            bgcolor: "#1976D2",
            ml: 2,
            width: 42,
            height: 42,
          }}
        >
          <PersonIcon />
        </Avatar>
      )}
    </Box>
  );
}

export default MessageBubble;
