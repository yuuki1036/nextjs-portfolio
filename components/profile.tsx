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
            WEB系フルスタックエンジニアです。主にECサイトの開発・保守を経験してきました。最近はReactやTypeScriptを勉強しています。クラウドの学習を兼ねてAWS認定ソリューションアーキテクトアソシエイトを取得しました。
            <br />
            現在はフリーランスとして働きながら転職活動を行っています。
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
