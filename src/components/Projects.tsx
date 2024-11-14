import { Box, Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=450',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI integration',
    image: 'https://newsocial.sgp1.digitaloceanspaces.com/blog/1709220684_chatbot-ai.png',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio built with React and Material UI',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450',
  },
];

export default function Projects() {
  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.title} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography>{project.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}