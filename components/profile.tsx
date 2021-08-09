import { Box, Grid, Typography } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <section>
      <Box mt={6}>
        <Grid container>
          <p>
            WEBエンジニアです。フロントエンド/バックエンド開発・インフラ構築を経験してきました。現在は
            React, Next.js を勉強中です。
          </p>
          <Box mt={3}>
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
                    <p className="font-bold">
                      経験・スキル一覧
                    </p>
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
