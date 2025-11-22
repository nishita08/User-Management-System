import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../types/User";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!mounted) return;
        // Map response to minimal shape
        const mapped = res.data.map(u => ({
          id: u.id,
          name: u.name,
          email: u.email,
          phone: u.phone,
          company: u.company ? { name: (u.company as any).name } : null
        }));
        setUsers(mapped);
      })
      .catch(err => {
        if (!mounted) return;
        setError(err.message || "Failed to fetch users");
      })
      .finally(() => { if (mounted) setLoading(false); });

    return () => { mounted = false; };
  }, []);

  const addUser = (user: Omit<User, "id">) => {
    const nextId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
    setUsers(prev => [{ ...user, id: nextId }, ...prev]);
  };

  const updateUser = (updated: User) => {
    setUsers(prev => prev.map(u => (u.id === updated.id ? updated : u)));
  };

  const deleteUser = (id: number) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return { users, loading, error, addUser, updateUser, deleteUser };
};
