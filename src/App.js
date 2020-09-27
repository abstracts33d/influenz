import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AppLayout from './Layout'
import './App.less';

import Dashboard from './pages/Dashboard'
import Placements from './pages/Placements'
import Placement from './pages/Placement'
import InfluencerList from './pages/InfluencerList'
import Influencers from './pages/Influencers'
import Influencer from './pages/Influencer'
import ShopList from './pages/ShopList'
import Shops from './pages/Shops'
import Shop from './pages/Shop'

function App() {
  return (
    <div className="App">
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/placements" component={Placements} />
            <Route exact path="/placement" component={Placement} />
            <Route exact path="/influencerList" component={InfluencerList} />
            <Route exact path="/influencers" component={Influencers} />
            <Route exact path="/influencer" component={Influencer} />
            <Route exact path="/shopList" component={ShopList} />
            <Route exact path="/shops" component={Shops} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
