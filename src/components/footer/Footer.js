import React, { Component } from 'react';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/react';
class Footer extends Component {
  render() {
    return (
      <IonFooter>
        <IonToolbar color="primary">
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    );
  }
}

export default Footer;
