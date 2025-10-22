import SideNav from "@/app/ui/dashboard/sidenav"

export default async function Page() { 

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl">
        Dashboard
      </h1>
      <SideNav />
    </main>
  )
};