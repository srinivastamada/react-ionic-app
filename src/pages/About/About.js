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

class About extends Component {
  render() {
    return (
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>About Page</IonCardTitle>
            <IonList>
              <IonItem>
                <IonLabel>
                  <Link to="/">Home</Link>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <Link to="/settings">Settings</Link>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    );
  }
}

export default About;
