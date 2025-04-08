import { Highlights, Services, PageTemplate } from "../components/app";
import type { NextPage } from "next";

const Explore: NextPage = () => {
  return (
      <PageTemplate
          title="Istraži Usluge"
          description="Pogledajte najbolje majstore i uslužne delatnosti na Biznis Centru!"
      >
        <Highlights />
        <Services />
      </PageTemplate>
  );
};

export default Explore;
