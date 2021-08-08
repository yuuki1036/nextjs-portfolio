import { Box, Grid, Typography } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";
import theme from "pages/theme";

const Profile: FC = () => {
  return (
    <section>
      <Box mt={5}>
        <Grid container>
          <Typography variant="h6">
            WEBエンジニアです。フロントエンド/バックエンド開発・インフラ構築を経験してきました。現在は
            React, Next.js を勉強中です。
          </Typography>
          <Box mt={2}>
            <Link href="/experience" passHref>
              <a>
                <Grid
                  container
                  spacing={1}
                  alignItems="center"
                >
                  <Grid item>
                    <PlayCircleOutline fontSize="large" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      経験・スキル一覧
                    </Typography>
                  </Grid>
                </Grid>
              </a>
            </Link>
          </Box>
        </Grid>
      </Box>
    </section>
  );
};

export default Profile;
