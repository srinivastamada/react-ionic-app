import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle
} from '@ionic/react';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton goBack={() => {}} />
            </IonButtons>
            <IonTitle>My Navigation Bar</IonTitle>
          </IonToolbar>

          <IonToolbar>
            <IonTitle>Subheader</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonContent>
        <IonFooter>
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
      </IonApp>
    );
  }
}

export default Home;
