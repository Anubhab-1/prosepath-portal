import Layout from '@/components/layout/Layout';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturedBooks from '@/components/home/FeaturedBooks';
import BestsellerCarousel from '@/components/home/BestsellerCarousel';
import Newsletter from '@/components/home/Newsletter';

const Index = () => (
  <Layout>
    <HeroBanner />
    <FeaturedBooks />
    <BestsellerCarousel />
    <Newsletter />
  </Layout>
);

export default Index;
