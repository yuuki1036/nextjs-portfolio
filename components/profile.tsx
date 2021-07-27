import { Box, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <Box mt={5}>
      <Grid container>
        <Typography variant="h6">
          WEBエンジニアです。フロントエンド・バックエンド開発を経験。詳細は
          <Link href="/experience">
            <a className="hover:underline">こちら</a>
          </Link>
          。
        </Typography>
      </Grid>
    </Box>
  );
};

export default Profile;
