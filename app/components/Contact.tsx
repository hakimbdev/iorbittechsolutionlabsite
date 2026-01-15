import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" rows={4} />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
