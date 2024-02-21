"use client";
import React, { useEffect, useState, useMemo } from "react";
import StatsCard from "@/app/component/ui/cards/statsCard";
import { BinPointService } from "@services/binPoint.service";
import { UserService } from "@services/user.service";

export default function AdminDashboardLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [binsData, setBinsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  const getAllBinPoints = () => {
    setIsLoading(true);

    BinPointService.getAllBinPoints()
      .then((res) => {
        setBinsData(res.pointBins);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getAllUsers = () => {
    setIsLoading(true);

    UserService.getAllUsers()
      .then((res) => {
        setUsersData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getAllBinPoints(), getAllUsers()])
      .then(() => {})
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  // Hypothetical memoization example:
  const _processedBinsData = useMemo(() => {
    // Imagine this is a heavy computation
    return binsData.map((bin: any) => ({ ...bin, processed: true }));
  }, [binsData]);

  const _processedUsersData = useMemo(() => {
    // Another heavy computation
    return usersData.map((user: any) => ({ ...user, processed: true }));
  }, [usersData]);

  // Now you would use processedBinsData and processedUsersData in your render logic
  // For this example, the actual usage remains unchanged because we don't have a specific use case for the processed data.

  return (
    <>
      <div className="flex gap-8 flex-col sm:flex-row mt-4 mb-8">
        <StatsCard
          icon="solar:trash-bin-2-line-duotone"
          title="Bins count"
          value={binsData.length} // Example usage if you were displaying counts
          isLoading={isLoading}
        />
        <StatsCard
          icon="solar:users-group-two-rounded-broken"
          title="Users count"
          value={usersData.length} // Another example usage
          isLoading={isLoading}
        />
        <StatsCard icon="heroicons:truck" title="Urban count" value={0} />
      </div>
      {children}
    </>
  );
}
