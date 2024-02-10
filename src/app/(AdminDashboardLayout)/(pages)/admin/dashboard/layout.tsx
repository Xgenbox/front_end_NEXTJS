"use client";

import StatsCard from "@/app/component/ui/cards/statsCard";

// import { useSelector } from "@/store/hooks";
// import { ScoreService } from "@services/score.service";
// import { useEffect } from "react";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const getScoreStats = () => {
  //   ScoreService.getScore()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getScoreStats()
  // }, []);

  return (
    <>
      <div className="flex gap-8 flex-col sm:flex-row mt-4 mb-8">
        <StatsCard
          icon="solar:trash-bin-2-line-duotone"
          title="Bins count"
          value={8}
        />
        <StatsCard icon="solar:users-group-two-rounded-broken" title="Users count" value={0} />
        <StatsCard icon="heroicons:truck" title="Urban count" value={0} />
      </div>
      {children}
    </>
  );
}
