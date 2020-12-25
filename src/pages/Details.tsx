import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonList,
  IonItem,
  IonPage,
} from "@ionic/react";
// import parse from 'html-react-parser';

interface Post {
  id_post: string;
  id_user: string;
  id_kategori: string;
  slug_post: string;
  title: string;
  body: string;
  image: string;
  status: string;
  date_post: string;
  date: string;
}

const Details: React.FunctionComponent = (props) => {
  let prop: any = props;
  let match: any = prop.match;
  let data: any = JSON.parse(match.params.data);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>{data.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data.map((m: any, idx: number) => (
          <IonList key={idx} lines="none">
            <IonItem>
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <p>{m.title}</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
          </IonList>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Details;
