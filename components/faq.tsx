import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How do I get started with running a battery?</AccordionTrigger>
              <AccordionContent>
                <p>Here&apos;s what you need to know about our service.</p>
                <p>We&apos;re here to help you understand solar energy sharing.</p>
                <p>Let&apos;s make renewable energy accessible to everyone.</p>
                Getting started is easy! Simply create an account, complete our quick assessment to determine your
                energy needs or generation capacity, and our team will guide you through the setup process. We'll help
                you choose the right plan and connect you with the appropriate energy partners in your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Do I need special equipment?</AccordionTrigger>
              <AccordionContent>
                If you're looking to generate and share solar energy, you'll need solar panels and a compatible
                inverter. For those looking to purchase clean energy, no special equipment is needed beyond our smart
                meter which we provide as part of the service. Our team will assess your current setup during the
                onboarding process and recommend any necessary upgrades or additions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How does the energy credit system work?</AccordionTrigger>
              <AccordionContent>
                Our energy credit system allows producers to earn credits for the excess energy they generate and feed
                into the network. These credits can then be used to offset future energy consumption or can be sold to
                other users on our platform. The value of credits fluctuates based on supply and demand, creating a fair
                marketplace for all participants.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Is my data safe?</AccordionTrigger>
              <AccordionContent>
                Yes, we take data security very seriously. All personal and payment information is encrypted using
                industry-standard protocols. We never share your data with third parties without your explicit consent,
                and we comply with all relevant data protection regulations. You can review our comprehensive privacy
                policy for more details on how we protect and manage your information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What if I have technical issues with my solar setup?
              </AccordionTrigger>
              <AccordionContent>
                Our support team includes technical experts who can help troubleshoot most common issues remotely. For
                more complex problems, we have a network of certified technicians who can provide on-site assistance.
                Premium and Business plan subscribers receive priority support and maintenance services as part of their
                package.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
