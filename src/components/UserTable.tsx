import React from "react";
import { User } from "../types/User";

type Props = {
  users: User[];
  onEdit: (u: User) => void;
  onDelete: (u: User) => void;
};

const UserTable: React.FC<Props> = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return <p>No users to display.</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone || "-"}</td>
              <td>{u.company?.name || "-"}</td>
              <td>
                <button className="btn" onClick={() => onEdit(u)}>Edit</button>
                <button className="btn danger" onClick={() => onDelete(u)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
