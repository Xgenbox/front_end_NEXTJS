"use client";
import PageContainer from "@/app/(UserDashboardLayout)/components/container/PageContainer";
import UserDashboardQrCodeScanner from "@/app/(UserDashboardLayout)/components/pages/scan/QRcode";
import DashboardCard from "@/app/(UserDashboardLayout)/components/shared/DashboardCard";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const ScanQrCodeUserDashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
      <PageContainer>
        <DashboardCard
          title="Scan QR Code"
          subtitle="Scan the QR Code displayed on the SmartBin to claim the Rewards"
        >
          <UserDashboardQrCodeScanner />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default ScanQrCodeUserDashboardPage;
