import React, { useState } from "react";
import axios from "axios";
import { Container, Typography, TextField, Button, Paper, Box } from "@mui/material";

const API_URL = "http://127.0.0.1:8000/generate/";

const App: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    if (!prompt) return;
    try {
      const res = await axios.post(API_URL, { prompt }, {
        headers: { "Content-Type": "application/json" }
      });
      setResponse(res.data.generated_text);
    } catch (error) {
      console.error("Error generating text:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        RedDragonAI Text Generator
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Enter a prompt..."
          variant="outlined"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={handleSubmit}
          sx={{ mb: 2 }}
        >
          Generate Text
        </Button>

        {response && (
          <Paper elevation={2} sx={{ p: 2, mt: 2, backgroundColor: "#f5f5f5" }}>
            <Typography variant="subtitle1" fontWeight="bold">Generated Text:</Typography>
            <Typography variant="body1">{response}</Typography>
          </Paper>
        )}
      </Paper>
    </Container>
  );
};

export default App;
