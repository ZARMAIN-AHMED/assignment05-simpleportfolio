import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white py-20 text-center ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I&apos;m <strong className="text-teal-400">ZARMAIN AHMED</strong>
        </h1>
        <p className="text-lg mb-6">
          A Passionate Web Developer and UI/UX Designer Creating Awesome Web Applications 🚀.
        </p>
        <Link href={'/about'}>
          <Button className="bg-teal-500 hover:bg-teal-700 text-1xl font-extrabold">
            About Me
          </Button>
        </Link>
      </div>
    </section>
  );
}
