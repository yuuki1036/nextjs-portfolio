import { Box, Grid, Typography } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";
import theme from "pages/theme";

const Profile: FC = () => {
  return (
    <Box mt={5}>
      <Grid container>
        <Typography variant="h6">
          WEBエンジニアです。フロントエンド/バックエンド開発・インフラ構築を経験してきました。現在は
          React, Next.js を勉強中です。
        </Typography>
        <Box mt={2}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <PlayCircleOutline fontSize="large" />
            </Grid>
            <Grid item className="hover:underline">
              <Link href="/experience">
                <a>
                  <Typography variant="h6">
                    経験・スキル一覧
                  </Typography>
                </a>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Profile;
