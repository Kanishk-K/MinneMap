"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  viewers: {
    label: "Viewers",
    color: "var(--chart-1)",
  },
  views: {
    label: "Views",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function ViewViewersOverTime(){
    // Offer 1 week, 1 month, 6 month, and 1 year time ranges
    const [timeRange, setTimeRange] = React.useState("1w")

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date("2024-06-30") // Replace with the current date
        let daysToSubtract = 7
        if (timeRange === "1m") {
            daysToSubtract = 30
        } else if (timeRange === "6m") {
            daysToSubtract = 180
        } else if (timeRange === "1y") {
            daysToSubtract = 365
        }
        const pastDate = new Date(referenceDate)
        pastDate.setDate(referenceDate.getDate() - daysToSubtract)
        return date >= pastDate
    })
    return (
        <Card className="col-span-2 sm:col-span-4 lg:col-span-4 row-span-2">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row flex-col">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>Views and Viewers</CardTitle>
                    <CardDescription>
                        Showing views and visits over the past {timeRange === "1w" ? "week" : timeRange === "1m" ? "month" : timeRange === "6m" ? "6 months" : "year"}
                    </CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger
                        className="w-[160px] rounded-lg sm:ml-auto"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Last Week" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="1w" className="rounded-lg">
                        Last Week
                        </SelectItem>
                        <SelectItem value="1m" className="rounded-lg">
                        Last Month
                        </SelectItem>
                        <SelectItem value="6m" className="rounded-lg">
                        Last 6 Months
                        </SelectItem>
                        <SelectItem value="1y" className="rounded-lg">
                        Last Year
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer className="aspect-auto h-[250px] w-full" config={chartConfig}>
                    <AreaChart data={filteredData}>
                        <defs>
                        <linearGradient id="fillviewers" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-viewers)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-viewers)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillviews" x1="0" y1="0" x2="0" y2="1">
                            <stop
                            offset="5%"
                            stopColor="var(--color-views)"
                            stopOpacity={0.8}
                            />
                            <stop
                            offset="95%"
                            stopColor="var(--color-views)"
                            stopOpacity={0.1}
                            />
                        </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={32}
                        tickFormatter={(value) => {
                            const date = new Date(value)
                            return date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            })
                        }}
                        />
                        <ChartTooltip
                        cursor={false}
                        content={
                            <ChartTooltipContent
                            labelFormatter={(value) => {
                                return new Date(value).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                })
                            }}
                            indicator="dot"
                            />
                        }
                        />
                        <Area
                        dataKey="views"
                        type="natural"
                        fill="url(#fillviews)"
                        stroke="var(--color-views)"
                        stackId="a"
                        />
                        <Area
                        dataKey="viewers"
                        type="natural"
                        fill="url(#fillviewers)"
                        stroke="var(--color-viewers)"
                        stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

const chartData = [
  { date: "2024-04-01", viewers: 222, views: 150 },
  { date: "2024-04-02", viewers: 97, views: 180 },
  { date: "2024-04-03", viewers: 167, views: 120 },
  { date: "2024-04-04", viewers: 242, views: 260 },
  { date: "2024-04-05", viewers: 373, views: 290 },
  { date: "2024-04-06", viewers: 301, views: 340 },
  { date: "2024-04-07", viewers: 245, views: 180 },
  { date: "2024-04-08", viewers: 409, views: 320 },
  { date: "2024-04-09", viewers: 59, views: 110 },
  { date: "2024-04-10", viewers: 261, views: 190 },
  { date: "2024-04-11", viewers: 327, views: 350 },
  { date: "2024-04-12", viewers: 292, views: 210 },
  { date: "2024-04-13", viewers: 342, views: 380 },
  { date: "2024-04-14", viewers: 137, views: 220 },
  { date: "2024-04-15", viewers: 120, views: 170 },
  { date: "2024-04-16", viewers: 138, views: 190 },
  { date: "2024-04-17", viewers: 446, views: 360 },
  { date: "2024-04-18", viewers: 364, views: 410 },
  { date: "2024-04-19", viewers: 243, views: 180 },
  { date: "2024-04-20", viewers: 89, views: 150 },
  { date: "2024-04-21", viewers: 137, views: 200 },
  { date: "2024-04-22", viewers: 224, views: 170 },
  { date: "2024-04-23", viewers: 138, views: 230 },
  { date: "2024-04-24", viewers: 387, views: 290 },
  { date: "2024-04-25", viewers: 215, views: 250 },
  { date: "2024-04-26", viewers: 75, views: 130 },
  { date: "2024-04-27", viewers: 383, views: 420 },
  { date: "2024-04-28", viewers: 122, views: 180 },
  { date: "2024-04-29", viewers: 315, views: 240 },
  { date: "2024-04-30", viewers: 454, views: 380 },
  { date: "2024-05-01", viewers: 165, views: 220 },
  { date: "2024-05-02", viewers: 293, views: 310 },
  { date: "2024-05-03", viewers: 247, views: 190 },
  { date: "2024-05-04", viewers: 385, views: 420 },
  { date: "2024-05-05", viewers: 481, views: 390 },
  { date: "2024-05-06", viewers: 498, views: 520 },
  { date: "2024-05-07", viewers: 388, views: 300 },
  { date: "2024-05-08", viewers: 149, views: 210 },
  { date: "2024-05-09", viewers: 227, views: 180 },
  { date: "2024-05-10", viewers: 293, views: 330 },
  { date: "2024-05-11", viewers: 335, views: 270 },
  { date: "2024-05-12", viewers: 197, views: 240 },
  { date: "2024-05-13", viewers: 197, views: 160 },
  { date: "2024-05-14", viewers: 448, views: 490 },
  { date: "2024-05-15", viewers: 473, views: 380 },
  { date: "2024-05-16", viewers: 338, views: 400 },
  { date: "2024-05-17", viewers: 499, views: 420 },
  { date: "2024-05-18", viewers: 315, views: 350 },
  { date: "2024-05-19", viewers: 235, views: 180 },
  { date: "2024-05-20", viewers: 177, views: 230 },
  { date: "2024-05-21", viewers: 82, views: 140 },
  { date: "2024-05-22", viewers: 81, views: 120 },
  { date: "2024-05-23", viewers: 252, views: 290 },
  { date: "2024-05-24", viewers: 294, views: 220 },
  { date: "2024-05-25", viewers: 201, views: 250 },
  { date: "2024-05-26", viewers: 213, views: 170 },
  { date: "2024-05-27", viewers: 420, views: 460 },
  { date: "2024-05-28", viewers: 233, views: 190 },
  { date: "2024-05-29", viewers: 78, views: 130 },
  { date: "2024-05-30", viewers: 340, views: 280 },
  { date: "2024-05-31", viewers: 178, views: 230 },
  { date: "2024-06-01", viewers: 178, views: 200 },
  { date: "2024-06-02", viewers: 470, views: 410 },
  { date: "2024-06-03", viewers: 103, views: 160 },
  { date: "2024-06-04", viewers: 439, views: 380 },
  { date: "2024-06-05", viewers: 88, views: 140 },
  { date: "2024-06-06", viewers: 294, views: 250 },
  { date: "2024-06-07", viewers: 323, views: 370 },
  { date: "2024-06-08", viewers: 385, views: 320 },
  { date: "2024-06-09", viewers: 438, views: 480 },
  { date: "2024-06-10", viewers: 155, views: 200 },
  { date: "2024-06-11", viewers: 92, views: 150 },
  { date: "2024-06-12", viewers: 492, views: 420 },
  { date: "2024-06-13", viewers: 81, views: 130 },
  { date: "2024-06-14", viewers: 426, views: 380 },
  { date: "2024-06-15", viewers: 307, views: 350 },
  { date: "2024-06-16", viewers: 371, views: 310 },
  { date: "2024-06-17", viewers: 475, views: 520 },
  { date: "2024-06-18", viewers: 107, views: 170 },
  { date: "2024-06-19", viewers: 341, views: 290 },
  { date: "2024-06-20", viewers: 408, views: 450 },
  { date: "2024-06-21", viewers: 169, views: 210 },
  { date: "2024-06-22", viewers: 317, views: 270 },
  { date: "2024-06-23", viewers: 480, views: 530 },
  { date: "2024-06-24", viewers: 132, views: 180 },
  { date: "2024-06-25", viewers: 141, views: 190 },
  { date: "2024-06-26", viewers: 434, views: 380 },
  { date: "2024-06-27", viewers: 448, views: 490 },
  { date: "2024-06-28", viewers: 149, views: 200 },
  { date: "2024-06-29", viewers: 103, views: 160 },
  { date: "2024-06-30", viewers: 446, views: 400 },
]