import AnalyticDisplay from "@/components/Charts/AnalyticDisplay";
import OverallPerformance from "@/components/Charts/OverallPerformance";
import CampaignTable, { Payment } from "@/components/Charts/Tables/CampaignTable";

export default function Home(){
    return (
        <div id="dashboardHolder">
            <AnalyticDisplay description={"Total Views"} value={123456789} />
            <AnalyticDisplay description={"Total Unique Viewers"} value={123456789} />
            <AnalyticDisplay description={"Total Campaigns Held"} value={123456789} />
            <AnalyticDisplay description={"Most Effective Medium"} value={"Keller Hall"} />
            <AnalyticDisplay description={"Views Last 30 Days"} value={123456789} delta={-5} deltaTooltip={"Compared to the last 30 days"}/>
            <AnalyticDisplay description={"Campaigns Last 30 Days"} value={123456789} delta={5} deltaTooltip={"Compared to the last 30 days"} />

            <OverallPerformance />
            <CampaignTable data={payments} />
        </div>
    )
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]