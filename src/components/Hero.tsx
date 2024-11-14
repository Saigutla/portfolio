import { Box, Typography, Container, Button } from '@mui/material';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
           Gutla SaiKrishna
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Full Stack Developer
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Crafting digital experiences with modern web technologies
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Github size={20} />}
            href="https://github.com/Saigutla"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Linkedin size={20} />}
            href="https://www.linkedin.com/in/sai-krishna-gutla-3b274a2b2/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="info"
            startIcon={<Mail size={20} />}
            href="mailto:gutlasai000@gmail.com"
          >
            Contact
          </Button>
        </Box>
      </Container>
    </Box>
  );
}