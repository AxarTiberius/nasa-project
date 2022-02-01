import React from 'react';
import {AnimatorGeneralProvider} from '@arwes/animator';
import {BleepsProvider} from '@arwes/bleeps';
import {
  ArwesThemeProvider,
  Button,
  Card,
  StylesBaseline,
  Text
} from '@arwes/core';
import {
  audioSettings,
  playersSettings,
  bleepsSettings,
  IMAGE_URL,
  globalStyles,
  animatorGeneral
} from './settings'

// End settings

const App = () => {
  const [activate, setActivate] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setActivate(!activate), 2000);
    return () => clearTimeout(timeout);
  }, [activate]);

  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={globalStyles} />
      <BleepsProvider
        audioSettings={audioSettings}
        playersSettings={playersSettings}
        bleepsSettings={bleepsSettings}
      >
        <AnimatorGeneralProvider animator={animatorGeneral}>
          <Card
            animator={{ activate }}
            image={{
              src: IMAGE_URL,
              alt: 'A nebula'
            }}
            title='Nebula'
            options={
              <Button palette='secondary'>
                <Text>Learn More</Text>
              </Button>
            }
            style={{ maxWidth: 400 }}
          >
            <Text>
              A nebula is an interstellar cloud of dust, hydrogen,
              helium and other ionized gases. Originally, the term
              was used to describe any diffused astronomical object,
              including galaxies beyond the Milky Way.
            </Text>
          </Card>
        </AnimatorGeneralProvider>
      </BleepsProvider>
    </ArwesThemeProvider>
  );
};

export default App

/*
const App = () => {
  return <ArwesThemeProvider>
    <BleepsProvider sounds={sounds}>
      <Arwes animate background={resources.background.large} pattern={resources.pattern}>
        {anim => (
          <Router>
            <AppLayout show={anim.entered} />
          </Router>
        )}
      </Arwes>
    </BleepsProvider>
  </ArwesThemeProvider>;
};
export default App;
*/
