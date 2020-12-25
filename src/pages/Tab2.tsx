import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import axios from "axios";
import { Plugins } from "@capacitor/core";

interface Kategori {
  id_kategori: string;
  slug_kategori: string;
  name_kategori: string;
  urutan: string;
  date: string;
}

const Tab2: React.FC = () => {
  const [data, setData] = useState<Kategori[]>([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://travellover-ionic.000webhostapp.com/API/kategori"
      );
      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const { Browser } = Plugins;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Loading..."}
        />
        {data.map((data) => (
          <IonList>
            <IonItem
              onClick={async () =>
                await Browser.open({
                  url:
                    "https://travellover-ionic.000webhostapp.com/home/kategori/" +
                    data.id_kategori,
                })
              }
            >
              <IonLabel>{data.name_kategori}</IonLabel>
            </IonItem>
          </IonList>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
