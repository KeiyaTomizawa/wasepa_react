import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Mypage" >
      <div>
        <h2>Mypage</h2>
      </div>
    </Tab>
    <Tab label="Chart" >
      <div>
        <h2>Chart</h2>
      </div>
    </Tab>
    <Tab label="RecordingTime" >
      <div>
        <h2 style={styles.headline}>RecordingTime</h2>
      </div>
    </Tab>
    <Tab label="Ranking" >
      <div>
        <h2 style={styles.headline}>Ranking</h2>
      </div>
    </Tab>
  </Tabs>

);

export default TabsExampleSimple;
