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
  const [posts, setPost] = useState<Post[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://travellover-ionic.000webhostapp.com/API/post"
      );
      setPost(result.data);
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
        <IonSearchbar
          value={search}
          onIonChange={(e) => setSearch(e.detail.value!)}
          showCancelButton="focus"
        ></IonSearchbar>
        {posts.filter((val) => {
            if (search === "") {
              return val
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val
            } else {
              return null
            }
          }).map((val) => (
            <IonCard
              onClick={async () =>
                await Browser.open({
                  url:
                    "https://travellover-ionic.000webhostapp.com/home/detail/" +
                    val.slug_post,
                })
              }
            >
              <img
                src={
                  "https://travellover-ionic.000webhostapp.com/assets/article/img/post/" +
                  val.image
                }
                alt={val.image}
              />
              <IonCardHeader>
                <IonCardTitle>
                  <h3>{val.title}</h3>
                </IonCardTitle>
                <small>{"Published at : " + val.date_post}</small>
              </IonCardHeader>
            </IonCard>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
