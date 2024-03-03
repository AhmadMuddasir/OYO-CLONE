import Header2 from "@/components/Header2";
import Header1 from "../components/Header1";
import Header3 from "@/components/Header3";
import Head from "next/head";
import Header4 from "@/components/Header4";
import Footer from "@/components/Footer";
import Header5 from "@/components/Header5";

const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO:India's Best Online Hotel Booking site</title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-14">
          <img
            src={"/banner1.avif"}
            alt="img"
            className="w-full h-auto my-10"
          />
        </div>
        <div className="mb-14">
          <img
            src={"/banner2.avif"}
            alt="img"
            className="w-full h-auto my-10"
          />
        </div>
        <Header4 />
        <Header5 />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
