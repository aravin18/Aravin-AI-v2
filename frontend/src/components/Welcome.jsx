import { Box, Paper, Typography } from "@mui/material";

const prompts = [
  "💻 Explain Python",
  "🌐 Translate English to Tamil",
  "📄 Summarize PDF",
  "🎨 Generate an Image",
];

function Welcome() {
  return (
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        mt: 8,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
      >
        🤖 Welcome to Aravin AI
      </Typography>

      <Typography
        sx={{
          color: "#9CA3AF",
          mb: 5,
        }}
      >
        Your Personal AI Assistant
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: 3,
        }}
      >
        {prompts.map((item) => (
          <Paper
            key={item}
            sx={{
              p: 3,
              bgcolor: "#1F2937",
              color: "white",
              borderRadius: 3,
              cursor: "pointer",
              transition: ".3s",

              "&:hover": {
                bgcolor: "#00BCD4",
                color: "black",
                transform: "translateY(-5px)",
              },
            }}
          >
            <Typography>{item}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Welcome;
