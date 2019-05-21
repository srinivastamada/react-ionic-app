import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from '../../components/Header/Header';
import About from '../About/About';
import Home from '../Home/Home';
import Settings from '../Settings/Settings';
class Tabs extends Component {
  render() {
    return (
      <IonApp>
        <Header />

        <IonTabs>
          <IonRouterOutlet>
            <Route path="/:tab(home)" component={Home} exact={true} />
            <Route path="/:tab(about)" component={About} exact={true} />
            <Route path="/:tab(settings)" component={Settings} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom" color="dark">
            <IonTabButton tab="home" href="/home">
              <IonIcon name="home" />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="about" href="/about">
              <IonIcon name="contact" />
              <IonLabel>About</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon name="cog" />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonApp>
    );
  }
}

export default Tabs;
