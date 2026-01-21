import { Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        component="div"
        sx={{
          fontSize: {
            xs: "28px", 
            sm: "50px",
            md: "70px",
          },
        }}
      >
        E-Invoice Demo
      </Typography>
    </div>
  );
};
