import React, { useEffect } from "react";
import { Table } from "@mantine/core";

export default function COM_Table({ p_Data }) {
  const rows = p_Data.map((x) => (
    <tr key={x.id}>
      <td>{x.name}</td>
      <td>{x.age}</td>
    </tr>
  ));

  useEffect(() => {
    console.log("XXX", p_Data);
  }, []);

  return (
    <div>
      COM_Table
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}
