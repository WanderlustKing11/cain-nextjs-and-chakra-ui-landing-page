import { Inter } from 'next/font/google';
import Carousel from '@/components/Carousel';
import HoursOfOperation from '@/components/HoO';
import PrimaryFeature from '@/components/PrimaryFeature';
import ServiceTitle from '@/components/ServiceTitle';


const inter = Inter({ subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Carousel />
      <HoursOfOperation />
      <PrimaryFeature />
      <ServiceTitle />
    </>
  )
}
