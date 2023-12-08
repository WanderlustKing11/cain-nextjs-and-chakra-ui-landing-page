import { Inter } from 'next/font/google';
import Carousel from '@/components/Carousel';
import HoursOfOperation from '@/components/HoO';
import PrimaryFeature from '@/components/PrimaryFeature';
import ServiceTitle from '@/components/ServiceTitle';
import FeatureFlex1 from '@/components/FeatureFlex1';


const inter = Inter({ subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Carousel />
      <HoursOfOperation />
      <FeatureFlex1 />
    </>
  )
}
