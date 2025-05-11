import AnalyticDisplay from "@/components/Charts/AnalyticDisplay";
import OverallPerformance from "@/components/Charts/OverallPerformance";

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
        </div>
    )
}