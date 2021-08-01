import { Box, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <Box mt={5}>
      <Grid container>
        <Typography variant="h6">
          WEBエンジニアです。フロントエンド/バックエンド開発・インフラ構築を経験してきました。React,
          Next.js を勉強中です。
          <Link href="/experience">
            <a className="hover:underline">スキルセット</a>
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
};

export default Profile;
