
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const { t } = useTranslation(['common', 'legal']);
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
          {t('common:buttons.backToHome')}
        </Button>

        <div className="glass-card p-8">
          <h1 className="text-4xl font-bold mb-8 gradient-text">{t('legal:termsOfService.title')}</h1>
          
          <div className="space-y-6 text-gray-300">
            <p className="text-sm text-gray-400">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
              <p>
                Welcome to Fenix AI. These Terms of Service ("Terms") govern your use of our artificial intelligence services, website, and applications (collectively, the "Services") operated by Fenix AI, a company located in Winter Park, Florida, USA. By accessing or using our Services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Services</h2>
              <p className="mb-4">
                Fenix AI provides artificial intelligence-powered services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Conversational AI assistants</li>
                <li>AI-powered automation solutions</li>
                <li>Integration services with third-party platforms</li>
                <li>Custom AI implementations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the Services in compliance with all applicable laws</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not use the Services for illegal or unauthorized purposes</li>
                <li>Not attempt to reverse engineer or hack our AI systems</li>
                <li>Not share inappropriate, harmful, or offensive content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. AI Service Limitations and Disclaimers</h2>
              <h3 className="text-xl font-medium mb-2 text-gray-200">Accuracy Disclaimer</h3>
              <p className="mb-4">
                Our AI services provide responses based on machine learning models. While we strive for accuracy, AI-generated content may contain errors, inaccuracies, or biases. You should not rely solely on AI responses for critical decisions.
              </p>
              
              <h3 className="text-xl font-medium mb-2 text-gray-200">No Professional Advice</h3>
              <p className="mb-4">
                Our Services do not provide professional advice (legal, medical, financial, etc.). AI responses are for informational purposes only and should not replace consultation with qualified professionals.
              </p>

              <h3 className="text-xl font-medium mb-2 text-gray-200">Service Availability</h3>
              <p>
                We strive to maintain high service availability but do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, updates, or technical issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property Rights</h2>
              <h3 className="text-xl font-medium mb-2 text-gray-200">Our Rights</h3>
              <p className="mb-4">
                All rights, title, and interest in the Services, including AI models, algorithms, software, and content, are owned by Fenix AI or our licensors. Our trade names, trademarks, and logos are protected intellectual property.
              </p>

              <h3 className="text-xl font-medium mb-2 text-gray-200">Your Content</h3>
              <p className="mb-4">
                You retain ownership of content you provide to our Services. However, you grant us a license to use your content to provide and improve our Services, including training our AI models.
              </p>

              <h3 className="text-xl font-medium mb-2 text-gray-200">AI-Generated Content</h3>
              <p>
                You may use AI-generated content for your purposes, but we do not claim ownership of such content. However, similar content may be generated for other users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Privacy and Data Use</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Payment Terms</h2>
              <p className="mb-4">
                If you purchase paid services:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fees are due according to the selected billing cycle</li>
                <li>All payments are non-refundable unless required by law</li>
                <li>We may change pricing with advance notice</li>
                <li>Taxes are your responsibility unless otherwise stated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Limitation of Liability</h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FENIX AI SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES</li>
                <li>LOSS OF PROFITS, DATA, OR USE OF THE SERVICES</li>
                <li>DAMAGES RESULTING FROM AI-GENERATED CONTENT OR DECISIONS BASED THEREON</li>
                <li>DAMAGES EXCEEDING THE AMOUNT PAID FOR THE SERVICES IN THE PAST 12 MONTHS</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Fenix AI from any claims, damages, or expenses arising from your use of the Services, violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Termination</h2>
              <p>
                Either party may terminate these Terms at any time. We may suspend or terminate your access to the Services for violation of these Terms or for any other reason. Upon termination, your right to use the Services ceases immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by the laws of the State of Florida, USA, without regard to conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Orange County, Florida, and you consent to the jurisdiction of such courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of the Services after such changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p><strong>Fenix AI</strong></p>
                <p>3001 Aloma Ave</p>
                <p>Suite 212</p>
                <p>Winter Park, FL 32792</p>
                <p>Email: legal@fenixaiconsulting.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <p className="text-center text-gray-400 mt-8 pt-6 border-t border-gray-700">
              © 2025 Fenix AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
