
import Banner from '@/components/pages/Banner';
import BankingFooter from '@/components/pages/Footer';
import ForeignExchange from '@/components/pages/Foreign-Exchange';
import {Button} from '@nextui-org/button'; 

export default function Home() {
  return (
    <div>
      <ForeignExchange/>
     {/* <Banner/> */}
     <BankingFooter/> 
      
    </div>
  )
}