import clientImage from '../../assets/homeImage.webp'
import { HomeOrderCard } from './components/home-order-card'

export function ClientOrder() {
  return (
    <>
      <HomeOrderCard />
      <div className="flex h-auto items-center justify-center">
        <img src={clientImage} alt="" className="lg:h-[700px]" />
      </div>
    </>
  )
}
