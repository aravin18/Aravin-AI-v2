import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ChatInput({
  message,
  setMessage,
  sendMessage,
  loading,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        gap: 2,
        background: "#101827",
      }}
    >
      <TextField
        fullWidth
        placeholder="Ask Aravin AI..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "white",
            background: "#1F2937",
            borderRadius: "15px",
          },
        }}
      />

      <IconButton
        color="primary"
        onClick={sendMessage}
        disabled={loading}
        sx={{
          bgcolor: "#00BCD4",
          color: "white",
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
}

export default ChatInput;
