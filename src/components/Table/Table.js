import React, { useEffect, useState } from "react";
import "./Table.css";

function Table({ userList }) {
  const [currentPage, setCurrentPage] = useState(1);
  const listsPerPage = 10;
  const totalListItems = userList.length;

  const lastItemIndex = currentPage * listsPerPage;
  const firstItemIndex = lastItemIndex - listsPerPage;
  const DisplayArray = userList.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    console.log(totalListItems, "jshjkadsh");
  }, [userList]);

  return (
    <div className="Table_list">
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>30</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>25</td>
          <td>jane@example.com</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
