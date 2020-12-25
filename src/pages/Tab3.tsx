import React from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="fullheight xc">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <img src="assets/imgs/logo.png" alt="" />
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonToolbar>
            <IonTitle size="small" class="ion-text-center">
              This App is Created by Travel Lover's Team
            </IonTitle>
          </IonToolbar>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
