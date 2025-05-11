import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export default function AnalyticDisplay({description, value, delta, deltaTooltip}: {description: string, value: number | string, delta?: number, deltaTooltip?: string}) {
  return (
    <Card className="col-span-2">
      <CardContent className="flex flex-col">
        <span className="text-sm text-muted-foreground">
          {description}
        </span>
        <span className="text-2xl font-bold">
          {value.toLocaleString()}
        </span>
        {delta !== undefined && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge
                  variant={"default"}
                  className={`mt-2 ${delta > 0 ? "bg-green-200 text-green-600 dark:bg-green-800 dark:text-green-200" : delta < 0 ? "bg-red-200 text-red-600 dark:bg-red-800 dark:text-red-200" : "bg-muted text-foreground"}`}
                >
                  {delta > 0 ? "+" : delta < 0 ? "-" : ""}
                  {Math.abs(delta).toLocaleString() + "%"}
                  {delta > 0 ? <TrendingUp/> : delta < 0 ? <TrendingDown/> : ""}
                </Badge>
              </TooltipTrigger>
              {deltaTooltip && (
                <TooltipContent>
                  <p className="text-sm text-muted-foreground">
                    {deltaTooltip}
                  </p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
      </CardContent>
    </Card>
  );
}