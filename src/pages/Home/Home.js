import {
  IonButton,
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
          <img
            src="https://pbs.twimg.com/profile_banners/15761916/1509766298/1500x500"
            alt="Pic"
          />
          <IonCardHeader>
            <IonCardTitle>Welcome to Ionic React Project</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <Link to="/about">
            <IonButton color="secondary">About</IonButton>
          </Link>

          <Link to="/settings">
            <IonButton color="danger">Settings</IonButton>
          </Link>
        </IonCard>
      </IonContent>
    );
  }
}

export default Home;
