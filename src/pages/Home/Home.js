import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent
} from '@ionic/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to Home Page</IonCardTitle>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li> <Link to="/settings">Settings</Link></li>
            </ul>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    );
  }
}

export default Home;
