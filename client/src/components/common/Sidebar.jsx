import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  Typography,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import assets from "../../assets/index";

const Sidebar = () => {
  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{ width: 250, height: "100vh" }}
    >
      <List
        sx={{
          width: 250,
          height: "100vh",
          backgroundColor: assets.colors.secondary,
        }}
      >
        <ListItemButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              Nona
            </Typography>
            <IconButton>
              <LogoutOutlinedIcon />
            </IconButton>
          </Box>
        </ListItemButton>
        <Box sx={{ paddingTop: "10px" }}></Box>
        <ListItemButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              お気に入り
            </Typography>
          </Box>
        </ListItemButton>
        <Box sx={{ paddingTop: "10px" }}></Box>
        <ListItemButton>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700">
              プライベート
            </Typography>
            <IconButton>
              <AddBoxOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
