'use client'
import Intro from "@/feature/about/intro";
import Childhood from "@/feature/about/childhood";
import Teenage from "@/feature/about/teenage";
import Last from "@/feature/about/last";
import Footer from "@/feature/global/footer";
import BackButton from "@/feature/about/back-button";

function page() {
  return (
    <div className="about">
      <BackButton />
      <Intro />
      <Childhood />
      <Teenage />
      <Last />
      <Footer />
    </div>
  );
}


export default page;
