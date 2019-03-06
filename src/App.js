import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonApp, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from '@ionic/react';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;