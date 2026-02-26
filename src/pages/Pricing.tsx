import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Pricing = () => {
  return (
    <div className="pt-24">
      <PricingSection showAll={true} />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Pricing;
