import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import DataSeg from './src/pages/DataSeg.jsx';

try {
  console.log("Rendering...");
  const html = renderToString(
    <StaticRouter>
      <DataSeg />
    </StaticRouter>
  );
  console.log("Success!");
} catch (e) {
  console.error("ERROR:", e);
}
