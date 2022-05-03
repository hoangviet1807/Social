import { Snackbar } from "@mui/material";
import React from "react";

export const AlertComponent = ({ open, message }) => {
  const vertical = "top";
  const horizontal = "center";
  return (
    <div>
      <Snackbar
        severity="error"
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        // onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        autoHideDuration={2000}
      />
    </div>
  );
};
