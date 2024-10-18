import { Box, Grid, Typography } from '@mui/joy';

function FeaturesSection() {
  return (
    <Box sx={{ padding: 4 , width: '100%',}}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
        Key Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>  {/* Correcto: Solo usar 'item' */}
          <Typography variant="h6">Feature 1</Typography>
          <Typography>Some details about this feature.</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>  {/* Correcto: Solo usar 'item' */}
          <Typography variant="h6">Feature 2</Typography>
          <Typography>Some details about this feature.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeaturesSection;
