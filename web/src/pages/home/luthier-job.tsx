import luthierJobImage from '../../assets/jobImage.webp'
import { HomeJobCard } from './components/home-job-card'

export function LuthierJob() {
  return (
    <>
      <HomeJobCard />
      <div className="flex h-auto items-center justify-center">
        <img src={luthierJobImage} alt="" className="lg:h-[700px]" />
      </div>
    </>
  )
}
