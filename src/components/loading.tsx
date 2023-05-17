import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";
const LoadingPage = () => {
  const [open, setOpen] = useState(true);
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={() => setOpen(false)}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingPage;
