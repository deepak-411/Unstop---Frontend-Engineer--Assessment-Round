"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { PlusCircle, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { User } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

const UserForm = dynamic(() => import("@/components/user-form"), {
  loading: () => <Skeleton className="h-[350px]" />,
});

const RolePieChart = dynamic(() => import("@/components/role-pie-chart"), {
  loading: () => <Skeleton className="h-[300px]" />,
});

const initialUsers: User[] = [
  { id: "1", name: "John Doe", email: "john.doe@example.com", role: "Admin" },
  { id: "2", name: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },
  { id: "3", name: "Peter Jones", email: "peter.jones@example.com", role: "Viewer" },
  { id: "4", name: "Alice Williams", email: "alice.w@example.com", role: "Editor" },
];

export default function UserDashboard() {
  const [users, setUsers] = React.useState<User[]>(initialUsers);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    // This check runs only on the client-side
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);


  const handleAddUser = (user: Omit<User, "id">) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...user, id: String(prevUsers.length + 1) },
    ]);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  const roleColors: Record<User["role"], "default" | "secondary" | "destructive"> = {
    Admin: "destructive",
    Editor: "secondary",
    Viewer: "default",
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p>Loading & Verifying Authentication...</p>
      </div>
    );
  }

  return (
    <div className="bg-background text-foreground p-4 sm:p-6 md:p-8">
      <nav className="max-w-7xl mx-auto mb-4 flex justify-end gap-4">
         <Button variant="ghost" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </nav>
      <div className="max-w-7xl mx-auto">
        <header className="relative flex justify-center items-center mb-6">
          <h1 className="text-3xl font-bold animate-colorful">Frontend Engineer - Assessment Round</h1>
          <div className="absolute right-0">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <Button onClick={() => setIsDialogOpen(true)}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add User
              </Button>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                </DialogHeader>
                <React.Suspense fallback={<Skeleton className="h-64" />}>
                  <UserForm 
                    onUserAdd={handleAddUser}
                    setOpen={setIsDialogOpen}
                  />
                </React.Suspense>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant={roleColors[user.role]}>{user.role}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Role Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <React.Suspense fallback={<Skeleton className="h-[300px]" />}>
                <RolePieChart users={users} />
              </React.Suspense>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
