import { BestSelling } from './components/bestSelling';
import { Contact } from './components/contact';
import { OurBlog } from './components/ourBlog';
import { OurService } from './components/ourService';
import { OurSkill } from './components/ourSkill';
import { TopSection } from './components/topSection';

export const HomePage: PageProps = () => {
  return (
    <div className="overflow-hidden">
      <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
        <TopSection />
      </div>
      <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
        <OurService />
        <OurSkill />
        <BestSelling />
        <OurBlog />
        <Contact />
      </div>
    </div>
  );
};
