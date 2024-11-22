import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
      <section className="py-16 bg-gray-700 text-white  ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 ">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-48 h-48 md:w-60 md:h-80 md:ml-40 overflow-hidden rounded-full border-4 border-gray-300">
              <Image
                src="/hijabi.png"
                alt="Profile"
                className="w-full h-full object-cover"
                height={200}
                width={200}
              />
            </div>
  
            {/* Text Section */}
            <div className="text-center md:text-left md:ml-11 max-w-2xl ">
              <p className="text-lg leading-relaxed mb-4">
                Hello! My name is <strong className="text-teal-400">ZARMAIN AHMED</strong>, and I’m a passionate
                <strong className="text-teal-400" > Web Developer and UI/UX Designer</strong> specializing in creating
                innovative web solutions. I
                have honed my skills in technologies like
                <strong  className="text-teal-400"> React, Next.js, Tailwind CSS and TypeScript</strong>.
              </p>
              <p className="text-lg leading-relaxed mb-4">
              A passionate Student of IT, Cloud Computing, Applied Generative AI, Web 3.0 and Metaverse & Full Stack Developer at Governor House Karachi.
              </p>
              <p className="text-lg leading-relaxed">
                My goal is to collaborate on exciting projects that make a
                difference. Let’s connect and create something amazing together!
              </p><br/>
              <Link href={'/contact'}>
        <Button  className="text-white bg-teal-500 font-bold text-1xl hover:bg-teal-700">
          Contact Me
        </Button></Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  