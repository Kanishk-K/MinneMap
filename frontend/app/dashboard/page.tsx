import AnalyticDisplay from "@/components/Charts/AnalyticDisplay";
import ViewViewersOverTime from "@/components/Charts/ViewViewersOverTime";
import CampaignTable, { Campaign } from "@/components/Charts/Tables/Campaign/CampaignColumns";
import ViewsCampaign from "@/components/Charts/ViewsCampaign";

export default function Home(){
    return (
        <div id="dashboardHolder">
            <AnalyticDisplay description={"Total Views"} value={123456789} />
            <AnalyticDisplay description={"Total Unique Viewers"} value={123456789} />
            <AnalyticDisplay description={"Total Campaigns Held"} value={123456789} />
            <AnalyticDisplay description={"Most Effective Medium"} value={"Keller Hall"} />
            <AnalyticDisplay description={"Views Last 30 Days"} value={123456789} delta={-5} deltaTooltip={"Compared to the last 30 days"}/>
            <AnalyticDisplay description={"Campaigns Last 30 Days"} value={123456789} delta={5} deltaTooltip={"Compared to the last 30 days"} />

            <ViewViewersOverTime />
            <ViewsCampaign />
            <CampaignTable data={campaigns} />
        </div>
    )
}

const campaigns: Campaign[] = [
    {
        id: "728ed52f",
        date: "2023-10-01",
        name: "Campaign 1",
        views: 1000,
    },
    {
        id: "728dasd2",
        date: "2023-10-02",
        name: "Campaign 2",
        views: 2000,
    },
    {
        id: "728ed52f",
        date: "2023-10-03",
        name: "This is an edge case of a very long name that keeps going and going and going and going",
        views: 3000,
    },
    {
        id: "728ed52f",
        date: "2023-10-01",
        name: "Campaign 1",
        views: 1000,
    },
    {
        id: "728dasd2",
        date: "2023-10-02",
        name: "Campaign 2",
        views: 2000,
    },
  // ...
].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
})