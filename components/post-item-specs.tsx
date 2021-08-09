import {
  Box,
  Divider,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  Paper,
} from "@material-ui/core";
import { FC } from "react";
import Spec from "types/spec";

type Props = {
  title: string;
  specs: Spec;
};

const createData = (name: string, value: string) => {
  return { name, value };
};

const PostItemSpecs: FC<Props> = ({ title, specs }) => {
  const rows = [
    ...Object.entries(specs).map(([name, value]) =>
      createData(name, value),
    ),
  ];
  return (
    <Box my={3}>
      <Box>
        <Typography variant="h6" component="h3">
          {title}
        </Typography>
      </Box>
      <Box mt={1}>
        <TableContainer>
          <Table size="small">
            <TableBody>
              {rows.map((row, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PostItemSpecs;
