"use client";

import * as React from "react";
import { Pie, PieChart, Cell } from "recharts";
import type { User } from "@/lib/types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

interface RolePieChartProps {
  users: User[];
}

export default function RolePieChart({ users }: RolePieChartProps) {
  const chartData = React.useMemo(() => {
    const roleCounts = users.reduce(
      (acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
      },
      {} as Record<User["role"], number>
    );

    return Object.entries(roleCounts).map(([role, count]) => ({
      role,
      count,
    }));
  }, [users]);
  
  const chartConfig = {
    count: {
      label: "Users",
    },
    Admin: {
      label: "Admin",
      color: "hsl(var(--destructive))",
    },
    Editor: {
      label: "Editor",
      color: "hsl(var(--secondary-foreground))",
    },
    Viewer: {
      label: "Viewer",
      color: "hsl(var(--muted-foreground))",
    },
  };


  return (
    <div className="h-[300px] w-full">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="role"
            innerRadius={60}
            strokeWidth={5}
          >
             {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={chartConfig[entry.role as keyof typeof chartConfig]?.color} />
            ))}
          </Pie>
          <ChartLegend content={<ChartLegendContent nameKey="role" />} />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
