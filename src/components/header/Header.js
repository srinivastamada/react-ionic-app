import React, { Component } from 'react';
import {
  IonHeader,
  IonButtons,
  IonToolbar,
  IonBackButton,
  IonTitle
} from '@ionic/react';
class Header extends Component {
  render() {
    return (
      <IonHeader >
        <IonToolbar color="primary">
          <IonButtons slot="start" danger>
            <IonBackButton goBack={() => {}} />
          </IonButtons>
          <IonTitle>My Navigation Bar</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default Header;
