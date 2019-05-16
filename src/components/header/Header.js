import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Ionic React</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export default Header;
