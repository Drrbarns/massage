
import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShieldCheck size={64} className="mx-auto text-luxuryPink mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Privacy & Discretion</h1>
          <p className="text-gray-500 italic">Your trust is the foundation of our premium service.</p>
        </div>

        <div className="prose prose-pink max-w-none bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Lock className="mr-3 text-luxuryPink" size={24} /> 1. Professional Confidentiality
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Luxury Sensation Massage GH, we understand that our clients value their privacy above all else. Every interaction, booking, and session is treated with the highest level of confidentiality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our staff and therapists are bound by strict non-disclosure agreements. We do not share client lists, personal details, or appointment histories with any third parties.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <EyeOff className="mr-3 text-luxuryPink" size={24} /> 2. Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Any information provided through our contact forms or via WhatsApp is used solely for the purpose of fulfilling your booking request and providing you with elite service.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>No data is stored longer than necessary for the provision of services.</li>
              <li>Electronic communications are secured and periodically purged.</li>
              <li>We do not engage in mass marketing or unsolicited emails.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">3. Discreet Mobile Service</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For our outcall services, our therapists arrive in professional, unmarked attire and vehicles to maintain complete discretion in your private residence or chosen location.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">4. Contact Us Regarding Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have specific concerns about how your data is handled or wish to request the deletion of your contact history, please reach out to us directly at <span className="text-luxuryPink font-bold italic">luxuryillusiongh@gmail.com</span>.
            </p>
          </section>

          <div className="mt-16 pt-10 border-t border-gray-200 text-center italic text-sm text-gray-400">
            Last updated: January 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
