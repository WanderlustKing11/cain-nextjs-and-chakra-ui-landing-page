import { Inter } from 'next/font/google';
import Carousel from '@/components/Carousel';
import HoursOfOperation from '@/components/HoO';


const inter = Inter({ subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Carousel />
      <HoursOfOperation />
    </>
  )
}
