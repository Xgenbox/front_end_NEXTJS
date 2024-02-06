"use client";
import StatsCard from "@/app/(UserDashboardLayout)/components/ui/cards/statsCard";
import { ScoreService } from "@services/score.service";
import { useEffect } from "react";

export default async function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getScoreStats = () => {
    ScoreService.getScore()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    // getScoreStats()
  },[])
  return (
    <>
      <div className="flex gap-8 flex-col sm:flex-row mt-4 mb-8">
        <StatsCard
          icon="solar:arrow-right-up-outline"
          title="USER SCORE"
          value={85}
          isPercentage={true}
        />
        <StatsCard icon="solar:gift-bold" title="ALL GIFT COUNT" value={85} />
      </div>
      {children}
    </>
  );
}
