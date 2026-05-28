import React from 'react';

import Section_heading from './Section_heading';
import Features_grid from './Features_grid';

// Tech Lead Tip: We store our data in an array so we don't have to copy/paste 
// the HTML code three times. This is called keeping your code "DRY" (Don't Repeat Yourself).




export default function Features() {
  return (
    <section className="py-24 relative z-10" id="features">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <Section_heading/>

        {/* The Grid */}
        <Features_grid/>

      </div>
    </section>
  );
}