import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 4,
            borderRadius: 2,
          }}
        >
          <form>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              size="large"
              startIcon={<Send />}
              sx={{ mt: 2 }}
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}