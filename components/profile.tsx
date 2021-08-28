import { Box, Grid } from "@material-ui/core";
import { PlayCircleOutline } from "@material-ui/icons";
import Link from "next/link";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <section>
      <Box mt={5}>
        <Grid container>
          <p>
            WEBエンジニアです。フロントエンド/バックエンド開発・インフラ構築を経験してきました。React,
            Next.js
            を勉強中です。またクラウド技術の学習を兼ねて、AWS認定ソリューションアーキテクトアソシエイトの資格取得を目指しています。
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
