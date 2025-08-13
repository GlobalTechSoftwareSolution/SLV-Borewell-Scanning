
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from '@/app/home/page';
import Successfull from '@/app/Successfull/page'; 
import WhyChooseUs from '@/app/whychooseus/page';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <WhyChooseUs />
      <Successfull />
      <Footer />
    </>
  );
}
