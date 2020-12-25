import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLoading,
  IonPage,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonSearchbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./Tab1.css";
import axios from "axios";
import { Plugins } from "@capacitor/core";

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

const Tab1: React.FunctionComponent = (props) => {
  const [data, setData] = useState<Post[]>([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://travellover-ionic.000webhostapp.com/API/post"
      );
      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  // const showDetail = (data: any) => {
  //   let prop: any = props;
  //   prop.history.push({
  //     pathname: "/tab1/details/" + JSON.stringify(data),
  //   });
  // };

  // const openArticle = (url: any) => {
  //   window.open(url, '_blank');
  // }

  const { Browser } = Plugins;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Travel Lover Blog</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Loading..."}
        />
        <IonSearchbar>
          {/* onIonChange={(e) => setSearchText(e.detail.value!)}
          showCancelButton="focus" */}
        </IonSearchbar>
        {data.map((data) => (
          <IonCard
            onClick={async () =>
              await Browser.open({
                url:
                  "https://travellover-ionic.000webhostapp.com/home/detail/" +
                  data.slug_post,
              })
            }
          >
            <img
              src={
                "https://travellover-ionic.000webhostapp.com/assets/article/img/post/" +
                data.image
              }
              alt={data.image}
            />
            <IonCardHeader>
              <IonCardTitle>
                <h3>{data.title}</h3>
              </IonCardTitle>
              <small>{"Published at : " + data.date_post}</small>
            </IonCardHeader>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
