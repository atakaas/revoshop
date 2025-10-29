import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is RevoShop?",
        answer: "RevoShop is a modern e-commerce platform that offers a wide range of quality products at competitive prices. We provide a seamless shopping experience with secure payment options and fast shipping."
      },
      {
        question: "Where do you ship to?",
        answer: "We currently ship to all locations within the United States. We're working on expanding our shipping to international destinations in the near future."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
      }
    ]
  },
  {
    category: "Payment & Pricing",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay. All transactions are secured with industry-standard encryption."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, absolutely. We use SSL encryption and comply with PCI DSS standards to ensure your payment information is always protected. We never store your credit card details on our servers."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Currently, we accept full payment at checkout. However, we regularly offer promotional financing options through our partners. Check our promotions page for current offers."
      },
      {
        question: "Can I use multiple discount codes?",
        answer: "Generally, only one discount code can be used per order unless specifically stated in a promotion. Some special offers may be combined, but this will be clearly indicated in the promotion details."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 5-7 business days. Express shipping (2-3 business days) and overnight shipping options are also available at checkout."
      },
      {
        question: "How much does shipping cost?",
        answer: "Shipping costs vary based on your location and selected shipping method. We offer free standard shipping on orders over $50. You can see exact shipping costs at checkout."
      },
      {
        question: "Can I change my shipping address after ordering?",
        answer: "If your order hasn't shipped yet, you can contact our customer service team within 2 hours of placing your order to request an address change. Once shipped, address changes are not possible."
      },
      {
        question: "What if I'm not home when my package arrives?",
        answer: "Most carriers will attempt delivery multiple times. You can also provide delivery instructions or authorize package release at checkout. Check with the specific carrier for their policies."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most items. Products must be unused, in original packaging, and with all tags attached. Some items like final sale or personalized products cannot be returned."
      },
      {
        question: "How do I initiate a return?",
        answer: "You can initiate a return through your account dashboard or by contacting our customer service team. We'll provide you with a return shipping label and instructions."
      },
      {
        question: "When will I receive my refund?",
        answer: "Refunds are typically processed within 5-7 business days after we receive your returned item. The refund will be credited to your original payment method."
      },
      {
        question: "Who pays for return shipping?",
        answer: "For defective items or errors on our part, we cover return shipping. For other returns, customers are responsible for return shipping costs, unless the return is due to our error."
      }
    ]
  },
  {
    category: "Account & Security",
    questions: [
      {
        question: "Do I need an account to shop?",
        answer: "No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, view order history, and enjoy a faster checkout experience."
      },
      {
        question: "How do I reset my password?",
        answer: "Click on 'Forgot Password' on the login page. Enter your email address, and we'll send you instructions to reset your password. The link expires after 24 hours for security reasons."
      },
      {
        question: "How can I update my account information?",
        answer: "Log into your account and navigate to 'Account Settings' where you can update your personal information, shipping addresses, payment methods, and notification preferences."
      },
      {
        question: "Is my personal information safe?",
        answer: "Yes, we take data protection seriously. We use industry-standard security measures and never share your personal information with third parties without your consent, except as necessary to fulfill your orders."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="mb-6">
          <HelpCircle className="h-16 w-16 mx-auto text-primary mb-4" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about shopping, shipping, returns, and more
        </p>
      </section>

      {/* FAQ Accordion */}
      <section className="mb-16">
        {faqData.map((category) => (
          <div key={category.category} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {category.category}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((item, index) => (
                <AccordionItem key={index} value={`${category.category}-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>

      {/* Contact Support */}
      <section className="mb-16">
        <div className="bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Still Need Help?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Can't find the answer you're looking for? Our support team is here to help!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Chat with our support team in real-time
                </p>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <Button variant="outline" className="w-full">
                  support@revoshop.com
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto text-primary mb-2" />
                <CardTitle className="text-lg">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Call us Monday-Friday, 9 AM - 6 PM EST
                </p>
                <Button variant="outline" className="w-full">
                  1-800-REVO-SHP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Quick Links
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button variant="outline">
              Browse Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/promo">
            <Button variant="outline">
              Current Promotions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}