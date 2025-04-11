import { Layout } from "~/layout/Layout";
import { CompanyDetails } from "~/components/CompanyDetails/CompanyDetails";
import { Contacts } from "~/components/Contacts/Contacts";
import { Photos } from "~/components/Photos/Photos";
import { useAuth } from "~/context/AuthContext"; // обязательно!

const Home = () => {
  const { token } = useAuth(); // добавь это

  console.log("HOME RENDER TOKEN: ", token); // и это

  return (
    <Layout>
      <CompanyDetails />
      <Contacts />
      <Photos />
    </Layout>
  );
};

export default Home;
