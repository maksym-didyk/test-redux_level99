import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bulma';
import 'bulma/css/bulma.css';
import './styles/index.scss';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLDivElement)
  .render(
    <Root />,
  );
