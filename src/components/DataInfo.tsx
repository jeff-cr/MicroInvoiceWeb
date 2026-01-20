import { Box, Typography } from "@mui/material";
import { formatLabel } from "../helpers/labelFormater";

export const DataInfo = ({data}:any) => {
  return (
    <Box>
      {Object.entries(data).map(([key, value]) => {
        if (typeof value === "object") return null;

        return (
          <Box
            key={key}
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              height: "40px",
            }}
          >
            <Typography variant="subtitle2" sx={{ minWidth: 160 }}>
              {formatLabel(key)}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {String(value)}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
