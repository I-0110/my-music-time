import { getServerSession } from "next-auth";
import authOptions from "@/app/lib/auth";
import { redirect } from "next/dist/server/api-utils";

export default async function Page() {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== "admin") {
        redirect("/unauthorized");
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <h3>Welcome, {session.user?.name}</h3>
        </div>
    )
}