import FaQ from "@/components/homeComponents/FaQ";
import Footer from "@/components/homeComponents/Footer";
import Main from "@/components/homeComponents/Main";
import RaamonaInfo from "@/components/homeComponents/RaamonaInfo";
import Tabs from "@/components/homeComponents/Tabs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Main />
      <Tabs />
      <RaamonaInfo />
      <FaQ />
      <Footer />
    </>
  );
}
