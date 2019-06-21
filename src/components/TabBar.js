import React from 'react';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function TabBar() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Container>
      <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
        <Tab label="Overview" />
        <Tab label="Recent Quotes" />
      </Tabs>
    </Container>
  );
}