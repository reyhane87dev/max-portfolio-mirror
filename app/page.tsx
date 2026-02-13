import {
  Hero,
  Signature,
  Interduction,
  Awards,
  Expertise,
  Contact,
  Footer,
  Works,
} from "@/feature";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Signature />
      <Interduction />
      <Awards />
      <div className="work-and-expertise-background">
        <Works />
        <Expertise />
      </div>
      <div className="bg-light-gray ">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
