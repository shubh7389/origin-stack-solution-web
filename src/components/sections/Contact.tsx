import { useState } from "react";
import { Mail, Globe, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll reach out within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-brand">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Share your vision — we'll respond with a tailored plan within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-brand p-6 sm:p-8 md:p-10 text-brand-foreground shadow-elegant relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-brand-foreground/80 mb-8">
                  Talk to our experts and start your transformation.
                </p>
                <div className="space-y-5">
                  <a
                    href="mailto:info@originstacktech.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs uppercase tracking-wider opacity-80">Email</div>
                      <div className="font-semibold break-all">info@originstacktech.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Website</div>
                      <div className="font-semibold">www.originstacktech.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider opacity-80">Global</div>
                      <div className="font-semibold">Serving clients worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input required name="name" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input required type="email" name="email" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Company</label>
              <Input name="company" placeholder="Company name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Service Required</label>
              <Input name="service" placeholder="e.g. AI Solutions, Mobile App, Cloud" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                required
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
              />
            </div>
            <Button type="submit" variant="brand" size="lg" className="w-full" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
