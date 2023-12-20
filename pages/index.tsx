import { Inter } from 'next/font/google';
import Carousel from '@/components/Carousel';
import HoursOfOperation from '@/components/HoO';
import FeatureFlex1 from '@/components/FeatureFlex1';
import ServiceCards from '@/components/ServiceCards';
import ClientExamples from '@/components/ClientExamples';
import FeatureFlex2 from '@/components/FeatureFlex2';
import Location from '@/components/Location';
import Orgs from '@/components/Orgs';
// import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Carousel />
      <HoursOfOperation />
      <FeatureFlex1 />
      <ServiceCards />
      <ClientExamples />
      <FeatureFlex2 />
      <Location />
      <Orgs />
      {/* <Footer /> */}
    </>
  )
}
