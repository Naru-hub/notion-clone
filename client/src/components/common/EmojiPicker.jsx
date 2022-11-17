import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";

function EmojiPicker(props) {
  const [selectedEmoji, setSelectedEmoji] = useState();

  useEffect(() => {
    setSelectedEmoji(props.icon);
  }, [props.icon]);

  return (
    <Box>
      <Typography variant="h3" fontWeight="700" sx={{ cursor: "pointer" }}>
        {selectedEmoji}
      </Typography>
    </Box>
  );
}

export default EmojiPicker;
