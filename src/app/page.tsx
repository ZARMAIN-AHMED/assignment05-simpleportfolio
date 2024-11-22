
import Hero from "./hero/page";
import Projects from "./project/page";

import ContactForm from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
 
      <Hero />
      <Projects />
      <About />
      <ContactForm />
    
    </div>
  );
}
