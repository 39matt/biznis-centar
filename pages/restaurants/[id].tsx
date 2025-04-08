import { GetServerSideProps } from "next";
import { Services, PageTemplate, ItemDetails } from "../../components/app";
import Styles from "./service.module.css";
import { ServiceProps } from "./types";

export default function Service({ id }: ServiceProps) {
  return (
      <PageTemplate
          title="Detalji usluge"
          description="Stranica sa detaljima o usluzi na Biznis Centru"
      >
        <div>{}</div>
        <div className={Styles.header}>
          <div className={Styles.details}>
            <h1>Auto Servis Marko</h1>
            <p>
              Kvalitetan i pouzdan auto servis sa dugogodišnjim iskustvom u popravci svih vrsta vozila.
            </p>
          </div>
          <div className={Styles.tags}>
            <span>Besplatna procena</span>
            <span>Popust 10% na prve usluge</span>
            <span>Otvoreno od 08:00</span>
          </div>
        </div>
        <div className="mb-12">
          <ItemDetails
              rating={4.8}
              reviews={150}
              category={"Auto servis"}
              price={2}
              distance={"3,2 km (Bulevar Cara Konstantina, Niš)"}
          />
        </div>
        <Services />
      </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  };
};
