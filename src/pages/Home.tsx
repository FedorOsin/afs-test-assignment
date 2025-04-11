import { Layout } from "~/layout/Layout";
import { CompanyDetails } from "~/components/CompanyDetails/CompanyDetails";
import { Contacts } from "~/components/Contacts/Contacts";
import { Photos } from "~/components/Photos/Photos";

const Home = () => {
  return (
    <Layout>
      <CompanyDetails />
      <Contacts />
      <Photos />
    </Layout>
  );
};

export default Home;
