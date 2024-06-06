import { BestSelling } from './components/bestSelling';
import { Contact } from './components/contact';
import { OurBlog } from './components/ourBlog';
import { OurService } from './components/ourService';
import { OurSkill } from './components/ourSkill';
import { TopSection } from './components/topSection';

export const HomePage: PageProps = () => {
  return (
    <>
      <TopSection />
      <OurService />
      <OurSkill />
      <BestSelling />
      <OurBlog />
      <Contact />
    </>
  );
};
