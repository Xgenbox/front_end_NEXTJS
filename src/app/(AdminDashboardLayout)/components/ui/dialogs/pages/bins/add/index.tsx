//react
import React,{useState} from "react";
//mui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

//packages
import * as yup from "yup";
import { useFormik } from "formik";

//components
import AddIcon from "@mui/icons-material/Add";
import CustomFormLabel from "@/app/(UserDashboardLayout)/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/(UserDashboardLayout)/components/forms/theme-elements/CustomTextField";
import Image from "next/image";
import PageLoader from "@/app/component/ui/loaders/pageLoader";

//*yup validation schema
const validationSchema = yup.object({
  name: yup.string().required("name is Required"),
  type: yup.string().required("type is required"),
  capacity: yup.string().required("capacity is required"),
  topicGaz: yup.string().required("topic Gaz is required"),
  topicNiveau: yup.string().required("topic Niveau is required"),
  topicOpen: yup.string().required("topic Open is required"),
  topicGps: yup.string().required("topic Gps is required"),
});

const AddBinsDialog = ({ refresh }) => {
  //*component states
  const [open, setOpen] = useState<boolean>(false);

  const [isLoading, _] = useState<boolean>(false);

  //* dialog open and clos functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //*formik
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      capacity: "",
      topicGaz: "",
      topicNiveau: "",
      topicOpen: "",
      topicGps: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      refresh()
    },
  });
  return (
    <>
      {isLoading && <PageLoader />}
      <Button
        color="primary"
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Create trash bin
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Image
          src="/images/backgrounds/top-info-shape.png"
          alt="img"
          className="top-img"
          width={59}
          height={81}
        />
        <DialogContent>
          <div className="mx-2 mt-6">
            <Typography variant="h3" textAlign="center" mb={1}>
              Create trash bin
            </Typography>

            <Box>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} mb={3}>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
                    <CustomTextField
                      id="name"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter bin name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="type">Type</CustomFormLabel>
                    <CustomTextField
                      id="type"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter type"
                      name="type"
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      error={formik.touched.type && Boolean(formik.errors.type)}
                      helperText={formik.touched.type && formik.errors.type}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="capacity">
                      Capacity
                    </CustomFormLabel>
                    <CustomTextField
                      id="capacity"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter capacity"
                      name="capacity"
                      value={formik.values.capacity}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.capacity &&
                        Boolean(formik.errors.capacity)
                      }
                      helperText={
                        formik.touched.capacity && formik.errors.capacity
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="topicGaz">
                      Topic Gaz
                    </CustomFormLabel>
                    <CustomTextField
                      id="topicGaz"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter topic Gaz"
                      name="topicGaz"
                      value={formik.values.topicGaz}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.topicGaz &&
                        Boolean(formik.errors.topicGaz)
                      }
                      helperText={
                        formik.touched.topicGaz && formik.errors.topicGaz
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="topicNiveau">
                      Topic Niveau
                    </CustomFormLabel>
                    <CustomTextField
                      id="topicNiveau"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter topic Niveau"
                      name="topicNiveau"
                      value={formik.values.topicNiveau}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.topicNiveau &&
                        Boolean(formik.errors.topicNiveau)
                      }
                      helperText={
                        formik.touched.topicNiveau && formik.errors.topicNiveau
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="topicOpen">
                      Topic Open
                    </CustomFormLabel>
                    <CustomTextField
                      id="topicOpen"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter topic Open"
                      name="topicOpen"
                      value={formik.values.topicOpen}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.topicOpen &&
                        Boolean(formik.errors.topicOpen)
                      }
                      helperText={
                        formik.touched.topicOpen && formik.errors.topicOpen
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomFormLabel htmlFor="topicGps">
                      Topic GPS
                    </CustomFormLabel>
                    <CustomTextField
                      id="topicGps"
                      variant="outlined"
                      fullWidth
                      placeholder="Enter topic Gps"
                      name="topicGps"
                      value={formik.values.topicGps}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.topicGps &&
                        Boolean(formik.errors.topicGps)
                      }
                      helperText={
                        formik.touched.topicGps && formik.errors.topicGps
                      }
                    />
                  </Grid>
                </Grid>
                <div className="mb-6">
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                  >
                    Create trash bin
                  </Button>
                </div>
              </form>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddBinsDialog;