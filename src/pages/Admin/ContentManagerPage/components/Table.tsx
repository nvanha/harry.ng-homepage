import moment from "moment";

import "./Table.scss";

const Table = ({ data, onClickRow }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} onClick={() => onClickRow(item)}>
              <td>{index + 1}</td>
              <td>
                <div className="truncate">{item.titleThumb}</div>
              </td>
              <td>
                <div className="truncate">
                  {moment(item.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
