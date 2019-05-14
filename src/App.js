import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonApp } from '@ionic/react';
import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './routes';
class App extends Component {
  render() {
    return (
      <IonApp>
        <Header />
        <Routes />
        <Footer />
      </IonApp>
    );
  }
}

export default App;
