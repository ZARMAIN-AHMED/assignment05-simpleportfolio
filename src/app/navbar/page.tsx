import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-teal-400 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
       
        <Link href={'/contact'}>
        <Button variant="ghost" className="text-white ">
          Contact Me
        </Button></Link>
      </div>
    </nav>
  );
}
