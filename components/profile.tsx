import { Box, Typography } from "@material-ui/core";
import { VFC } from "react";

const Profile: VFC = () => {
  return (
    <Box mt={5}>
      <Typography variant="h6">
        WEBエンジニアです。フロントエンド・バックエンド開発を経験。
        <br />
        主な開発言語はJavaScript, PHP, HTML/CSS です。
      </Typography>
    </Box>
  );
};

export default Profile;
