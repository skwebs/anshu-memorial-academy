export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms & Conditions</h1>
          <p className="mt-4 text-lg opacity-80 max-w-2xl">
            Please read these terms and conditions carefully before using our website.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Anshu Memorial Academy website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">2. Use of Site Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                All materials, including images, illustrations, designs, icons, photographs, and written materials that appear as part of this site are copyrights, trademarks, and/or other intellectual properties owned by Anshu Memorial Academy.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Anshu Memorial Academy&apos;s website are provided &quot;as is&quot;. The school makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, or non-infringement of intellectual property.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">4. Admission Policies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Information regarding admissions, fees, and school policies provided on this website is for guidance only. Official confirmation must be obtained from the school office. The school reserves the right to change its policies and fees without prior notice.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">5. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users are prohibited from using the site to post or transmit any material which is or may be infringing, threatening, false, misleading, inflammatory, libelous, invasive of privacy, or otherwise unlawful.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">6. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any claim relating to Anshu Memorial Academy&apos;s website shall be governed by the laws of India and the state of Bihar without regard to its conflict of law provisions.
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
