import { IonCard, IonCardHeader, IonCardTitle, IonContent } from '@ionic/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to About Page</IonCardTitle>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    );
  }
}

export default About;
