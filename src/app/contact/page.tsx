import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function ContactForm() {
  return (
    <section className="py-16 bg-gray-800 text-white ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <Input type="text" placeholder="Your Name" className="bg-gray-700 text-white" />
          <Input type="email" placeholder="Your Email" className="bg-gray-700 text-white" />
          <textarea
            placeholder="Your Message"
            className="w-full bg-gray-700 text-white rounded-md p-3"
            rows={4}
          ></textarea>
          <Button className="bg-teal-500 hover:bg-teal-600 w-full">Send Message</Button>
        </form>
      </div><br/><br/><br/>
      <h1 className="text-lg text-center font-serif">
                My goal is to collaborate on exciting projects<br/> that make a
                difference. Let’s connect and create something amazing together! <br/>🚀
              </h1>
    </section>
  );
}
