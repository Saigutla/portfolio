import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { Code2, Database, Globe} from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: <Globe size={40} />,
    items: ['HTML','CSS','React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: <Database size={40} />,
    items: ['Node.js', 'Express', 'PostgreSQL','MYSQL'],
  },
  {
    title: 'Programming Languages',
    icon: <Code2 size={40} />,
    items: ['JavaScript', 'Python', 'Java', 'C','C++'],
  },
  {
    title: 'Frameworks',
    icon: <Globe size={40} />,
    items: ['spring', 'springboot','Hibernate']
  }
];

export default function Skills() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {skills.map((skill) => (
            <Grid item key={skill.title} xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, color: 'primary.main' }}>
                  {skill.icon}
                </Box>
                <Typography variant="h6" align="center" gutterBottom>
                  {skill.title}
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  {skill.items.map((item) => (
                    <Typography key={item} variant="body2" color="text.secondary">
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}