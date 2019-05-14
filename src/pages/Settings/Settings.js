import { IonCard, IonCardHeader, IonCardTitle, IonContent } from '@ionic/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Settings extends Component {
  render() {
    return (
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to Settings Page</IonCardTitle>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    );
  }
}

export default Settings;
