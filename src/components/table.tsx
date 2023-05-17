import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonAction from "../components/buttonAction";
import { TableProps } from "../interfaces/posts";

const Table = ({ posts, onClick, label }: TableProps) => {
  return (
    <div className="flex flex-col max-h-[35rem] overflow-y-auto max-w-5xl mx-auto my-10 relative pr-3 bg-white">
      <div className="sticky top-0 bg-white pb-3">
        <h1 className="bg-orange-400 p-2 rounded-md text-center font-bold mb-2">
          {label}
        </h1>
      </div>
      <table className="bg-slate-50 border border-white">
        <TableHead>
          <TableRow>
            <TableCell className="px-4 py-2 border sticky top-14 bg-gray-100">
              ID
            </TableCell>
            <TableCell className="px-4 py-2 border sticky top-14 bg-gray-100">
              USER ID
            </TableCell>
            <TableCell className="px-4 py-2 border sticky top-14 bg-gray-100">
              TITLE
            </TableCell>
            <TableCell className="px-4 py-2 border sticky top-14 bg-gray-100">
              BODY
            </TableCell>
            <TableCell className="px-4 py-2 border sticky top-14 bg-gray-100">
              ACTION
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {posts.map(({ body, id, title, userId, isFeatured }, index) => (
            <TableRow key={id} className="bodyRow">
              <TableCell className="px-4 py-2 border">{id}</TableCell>
              <TableCell className="px-4 py-2 border">{userId}</TableCell>
              <TableCell className="px-4 py-2 border">{title}</TableCell>
              <TableCell className="px-4 py-2 border">{body}</TableCell>
              <TableCell className="px-4 py-2 border">
                <ButtonAction
                  isFeacture={isFeatured}
                  onClick={() =>
                    onClick(index, { body, id, title, userId, isFeatured })
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </div>
  );
};

export default Table;
