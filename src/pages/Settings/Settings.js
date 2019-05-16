import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Settings extends Component {
  render() {
    return (
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Settings Page</IonCardTitle>
            <IonList>
              <IonItem>
                <IonLabel>
                  <Link to="/">Home</Link>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <Link to="/about">About</Link>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    );
  }
}

export default Settings;
