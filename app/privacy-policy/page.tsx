export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            At Anshu Memorial Academy, we value your privacy and are committed to protecting your personal data.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect personal information that you voluntarily provide to us when you fill out an admission inquiry form, contact form, or subscribe to our newsletter. This information may include your name, email address, phone number, and residential address.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process your admission inquiries and applications.</li>
                <li>Respond to your questions and provide customer support.</li>
                <li>Send you school-related updates, newsletters, and announcements.</li>
                <li>Improve our website and educational services.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">3. Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to maintain the safety of your personal information. Your personal data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">4. Disclosure to Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our school affairs, so long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">5. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use &quot;cookies&quot; to enhance user experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">6. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Anshu Memorial Academy has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes.
              </p>
            </div>

            <div className="pt-8 border-t border-border text-sm text-muted-foreground">
              Last updated: May 14, 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
