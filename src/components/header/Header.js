import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>React Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default Header;
