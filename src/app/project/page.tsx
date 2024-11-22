import Image from "next/image";

export default function Projects() {
    const projects = [
      {
        title: "My New Portfolio",
        description: "Build by Nex.js and Tailwind CSS",
        image: "/portfolio.png",
        link: "https://portfolio6-again-v2x8.vercel.app/",
      },
      {
        title: "Static Resume",
        description: "Another Amazing Project Build by HTML and CSS.",
        image: "/resume.png",
        link: "https://github.com/ZARMAIN-AHMED/HAKATHON-MILESTONE1-2.git",
      },
    ];
  
    return (
      <section className="py-16 bg-gray-700 ">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 text-white shadow-md rounded-lg overflow-hidden">
                <Image src={project.image} alt={project.title} height={900} width={900} className="md:w-full md:min-h-80 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-500 hover:underline">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  