import React from 'react';
import TabsNav from '../TabsNav';

const Tabs = () => (
  <div className="tabs">
    <TabsNav hasBorder />
    <div className="tabs__content">
      <p>Large businesses require a lot of IT infrastructure and a department to look after it. Small businesses often can’t afford to have that sort of internal support in place, yet they need fully operational IT systems in order for the business to run properly. For businesses like these, external IT support can be a cost-effective yet vital resource.</p>
    </div>
  </div>
);

export default Tabs;
