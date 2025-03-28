// import SideNav from '@/app/ui/dashboard/sidenav';
// import { Metadata } from 'next';
import Header from "@/components/category/Header";
import MainView from "@/components/category/MainView";

// export const experimental_ppr = true;
 
// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme Dashboard',
//     default: 'Acme Dashboard',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

export default async function Layout({ children, params }: { children: React.ReactNode,  params: { id: string } }) {
  const param = (await params).id;

  return (
    <>
      <Header />
      <main className="py-6 px-6 flex flex-col h-full">
        <MainView id={param}/>
        {children}
      </main>
    </>
  );
}