import {
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import AddIcon from "@mui/icons-material/Add";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar({
  newChat,
  chatHistory,
  loadChat,
}) {
  return (
    <Box
      sx={{
        width: 280,
        height: "100vh",
        bgcolor: "#0F172A",
        color: "white",
        display: "flex",
        flexDirection: "column",
        p: 3,
        borderRight: "1px solid #1E293B",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <SmartToyIcon
          sx={{
            fontSize: 40,
            color: "#00E5FF",
          }}
        />

        <Typography
          variant="h5"
          fontWeight="bold"
        >
          Aravin AI
        </Typography>
      </Box>

      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={newChat}
        sx={{
          mb: 3,
          bgcolor: "#00BCD4",
          color: "black",
          borderRadius: 3,
          "&:hover": {
            bgcolor: "#00ACC1",
          },
        }}
      >
        New Chat
      </Button>

      <Divider
        sx={{
          bgcolor: "#374151",
          mb: 2,
        }}
      />

      <Typography
  sx={{
    color: "#9CA3AF",
    mb: 1,
    mt: 2,
    fontWeight: "bold",
  }}
>
  Chat History
</Typography>

{chatHistory.map((chat) => (
  <Button
    key={chat.id}
    onClick={() => loadChat(chat)} 

    startIcon={<ChatIcon />}
    sx={{
      color: "white",
      justifyContent: "flex-start",
      mb: 1,
      textTransform: "none",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    }}
  >
    {chat.title}
  </Button>
))}

<Button
  startIcon={<SettingsIcon />}
  sx={{
    color: "white",
    justifyContent: "flex-start",
  }}
>
  Settings
</Button>

      <Box sx={{ flexGrow: 1 }} />

      <Typography
        variant="body2"
        color="gray"
      >
        Aravin AI v1.0
      </Typography>
    </Box>
  );
}

export default Sidebar;
