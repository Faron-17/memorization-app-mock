import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/placeholder-data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="px-24 mt-24">
        <ul className="flex flex-col space-y-4">
          {
            categories.map((item, idx) => (
              <li key={idx}>
                <Link href={item.link} className="flex justify-between gap-2 rounded-lg border p-3 text-left text-md transition-all hover:bg-accent cursor-pointer w-full h-12 border-slate-500">
                  <span>{item.name}</span>
                  <Badge>{item.count}</Badge>
                </Link>
              </li>
            ))
          }
        </ul>
      </main>
    </>
  );
}
