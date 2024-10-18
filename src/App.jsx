import React from 'react';

import { Box, CssBaseline } from '@mui/joy';

import HeroHeaderSection from './sections/HeroHeaderSection';
import FeaturesSection from './sections/FeaturesSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

function App() {
  return (
    <Box width="100%" maxWidth="100vw">
      <CssBaseline />
      <HeroHeaderSection />
      
      <Box id="featuresSection">  {/* El id que corresponde al enlace */}
        <FeaturesSection />
      </Box>
      
      <Box id="ctaSection">  {/* Otro id para el enlace CTA */}
        <CTASection />
      </Box>
      
      <Footer />
    </Box>
  );
}

export default App;
