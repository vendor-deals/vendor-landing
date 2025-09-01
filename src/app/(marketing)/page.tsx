import Footer from "@/components/layouts/footer";
import FAQs from "@/container/marketing/faps";
import Feature from "@/container/marketing/feature";
import Infor from "@/container/marketing/infor";

export default function Home() {
  return (
    <div className="w-full md:overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full mx-auto border border-dashed flex flex-col my-2">
        {/* <AnnouncementBar /> */}
        <Infor />
        <Feature />
        {/* <LogoCloud /> */}
        <FAQs />
        {/* <Testimonial /> */}
        <Footer />
      </div>
    </div>
  );
}
