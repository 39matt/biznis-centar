import { Categories, Highlights, Services, PageTemplate } from "../components/app";
import type { NextPage } from "next";

const AppHome: NextPage = () => {
  return (
    <PageTemplate
      title="Početna | Biznis Centar"
      description="Dobrodošli na Biznis Centar - Pronađite najbolje majstore i uslužne delatnosti!"
    >
      <Categories />
      <Highlights />
      <Services />
    </PageTemplate>
  );
};

export default AppHome;
