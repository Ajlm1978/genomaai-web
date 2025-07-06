
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="glass-card p-8">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-sm text-gray-400">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p>
                Fenix AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our artificial intelligence services, website, and related applications (collectively, the "Services"). Our company is located in Winter Park, Florida, USA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2 text-gray-200">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact information</li>
                <li>Account registration details</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4 text-gray-200">Usage Information</h3>
              <p className="mb-4">We automatically collect information about your use of our Services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>AI interaction data and conversation logs</li>
                <li>Device information and IP addresses</li>
                <li>Usage patterns and preferences</li>
                <li>Technical data for service improvement</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 mt-4 text-gray-200">Voice and Audio Data</h3>
              <p>
                When you use voice features, we may collect and process audio recordings to provide AI-powered responses. This data is processed securely and may be used to improve our AI models.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide and improve our AI services</li>
                <li>Train and enhance our AI models</li>
                <li>Process transactions and provide customer support</li>
                <li>Send important notices and updates</li>
                <li>Comply with legal obligations</li>
                <li>Detect and prevent fraud or abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>With service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights or the safety of others</li>
                <li>In connection with a business transaction</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. AI-Specific Considerations</h2>
              <p className="mb-4">
                <strong>Model Training:</strong> Your interactions may be used to improve our AI models, but we implement privacy-preserving techniques to protect your personal information.
              </p>
              <p className="mb-4">
                <strong>Data Retention:</strong> Conversation data is retained for service improvement but is anonymized where possible and deleted according to our retention schedule.
              </p>
              <p>
                <strong>Accuracy Disclaimer:</strong> AI-generated content may not always be accurate. We are not responsible for decisions you make based on AI responses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-4">
                <strong>California Residents:</strong> You have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to opt-out of the sale of personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Children's Privacy</h2>
              <p>
                Our Services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p><strong>Fenix AI</strong></p>
                <p>Winter Park, Florida, USA</p>
                <p>Email: privacy@fenixai.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of the State of Florida, USA, without regard to conflict of law principles. Any disputes arising from this Privacy Policy shall be resolved in the courts of Orange County, Florida.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
