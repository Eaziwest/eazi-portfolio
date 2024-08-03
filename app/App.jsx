import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import StairEff from '@/components/StairEff';


function App() {
  return (
    <Router>
      <Analytics />
      <Switch>
        <Route path="app/page.jsx" exact component={page} />
        <Route path="app/Resume" component={Resume} />
        <Route path="app/Contact" component={Contact} />
        <Route path="app/Services" component={Services} />
        <Route path="app/Work" component={Work} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default App;
