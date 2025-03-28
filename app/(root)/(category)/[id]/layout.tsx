import Header from "@/components/category/Header";
import MainView from "@/components/category/MainView";

// export const experimental_ppr = true;

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