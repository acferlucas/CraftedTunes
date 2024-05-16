import { MonthAccessAmount } from './month-access-amount'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './month-orders-amount'
import { PopularInstrumentsChart } from './popular-instruments-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <MonthOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
        <MonthAccessAmount />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularInstrumentsChart />
      </div>
    </div>
  )
}
