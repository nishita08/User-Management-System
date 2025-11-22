import React, { useState } from "react";
import "./App.css";
import { useUsers } from "./hooks/useUsers";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import ConfirmDialog from "./components/ConfirmDialog";
import { User } from "./types/User";

function App() {
  const { users, loading, error, addUser, updateUser, deleteUser } = useUsers();
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);
  const [deleting, setDeleting] = useState<User | null>(null);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(query.toLowerCase()) ||
    u.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>User Management</h1>
      </header>

      <div className="controls">
        <input
          placeholder="Search by name or email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn primary" onClick={() => { setEditing(null); setShowForm(true); }}>
          + New User
        </button>
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <UserTable
          users={filtered}
          onEdit={(u) => { setEditing(u); setShowForm(true); }}
          onDelete={(u) => setDeleting(u)}
        />
      )}

      {showForm && (
        <UserForm
          initial={editing}
          onCancel={() => setShowForm(false)}
          onSave={(data) => {
            if ((data as User).id) updateUser(data as User);
            else addUser(data as Omit<User, "id">);
            setShowForm(false);
          }}
        />
      )}

      {deleting && (
        <ConfirmDialog
          message={`Delete "${deleting.name}"?`}
          onCancel={() => setDeleting(null)}
          onConfirm={() => { deleteUser(deleting.id); setDeleting(null); }}
        />
      )}
    </div>
  );
}

export default App;
