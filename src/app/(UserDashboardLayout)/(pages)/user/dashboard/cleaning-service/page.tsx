"use client";
import Typography from "@mui/material/Typography";
import PageContainer from "@/app/(UserDashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(UserDashboardLayout)/components/shared/DashboardCard";
import CustomTable from "@/app/(UserDashboardLayout)/components/ui/customTable";
import { useEffect, useState } from "react";
import { CleaningServiceService } from "@services/cleaningService.service";
import { Button, ListItemIcon, MenuItem, TableCell } from "@mui/material";
import moment from "moment";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import AddCleaningServiceDialog from "@/app/(UserDashboardLayout)/components/ui/dialogs/pages/cleaning-service/add";
import DeleteCleaningServiceDialog from "@/app/(UserDashboardLayout)/components/ui/dialogs/pages/cleaning-service/delete";

const headers: string[] = ["Status", "Description", "Created At"];

const CleaningServicePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<
    { AdminAccept: string; description: string; createdAt: string }[]
  >([]);

  const getCleaningService = () => {
    setIsLoading(true);
    CleaningServiceService.getCleaningService()
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCleaningService();
  }, []);

  return (
    <>
      <PageContainer>
        <DashboardCard title="List Of Cleaning service request created by you">
          <CustomTable
            data={data}
            rows={data.map((item) => ({
              AdminAccept: item.AdminAccept,
              description: item.description,
              createdAt: moment(item.createdAt).format(
                "'MMMM Do YYYY, h:mm:ss a"
              ),
            }))}
            isLoading={isLoading}
            headers={headers}
            actionButtons={[
              <AddCleaningServiceDialog refresh={getCleaningService} />,
            ]}
            actionMenuItems={[
              (closeMenu, singleItemData) => {
                return (
                  <DeleteCleaningServiceDialog
                    refresh={getCleaningService}
                    closeMenu={closeMenu}
                    singleItemData={singleItemData}
                  />
                );
              },
            ]}
            isCSV={true}
          />
        </DashboardCard>
      </PageContainer>
    </>
  );
};

export default CleaningServicePage;
