import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BakemonoLands() {
  const [activePage, setActivePage] = useState("bakemono");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {/* Main Content */}
      <main className="px-8 py-12 max-w-6xl mx-auto space-y-24">
        {/* Description + Image */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-300">
              Bakemono Lands
            </h2>
            <p className="text-gray-400 mt-4">
              Enter Bakemono Lands, where mythical spirits await your care. 
              Hatch eggs, guide them through playful challenges, and watch them evolve into powerful companions.
            </p>

            {/* Google Play Button */}
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.ikarus.bakemonolands"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-lg hover:bg-blue-400 transition"
              >
                Get it on Google Play
              </a>
            </div>
          </div>

          {/* Placeholder image */}
          <div className="flex justify-center">
            <img
              src="/images/bakemono-lands-screenshot.png"
              alt="Bakemono Lands screenshot"
              className="rounded-2xl shadow-lg max-h-80 object-cover"
            />
          </div>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300">
            Privacy Policy
          </h2>
          <p className="text-gray-400">
            Effective Date: 21.08.2025
Developer: BlueEgg
Contact: blueegg.dev@gmail.com
Bakemono Lands (“the App”) is developed and provided by BlueEgg (“we,” “us,” or “our”). We respect your privacy and are committed to protecting it through this Privacy Policy. This document explains how we handle user information in connection with the App.
1. Information We Collect
We do not collect personal data directly. However, the App integrates with third-party services provided by Google (Firebase, Google Analytics, Google Play Games Services, Google Play Billing, and AdMob), which may collect and process the following categories of information on our behalf:
App Activity: Information about how users interact with the App (e.g., time spent, screens viewed).
App Information and Performance: Crash logs, diagnostic reports, and performance data.
Device and Identifiers: Device identifiers such as Firebase Installation ID or Advertising ID.
User Identifiers: A unique user ID and display name associated with Google Play Games Services.
Personal Information: The Google Play Games profile name chosen by the user.
Financial Information: Purchase history relating to in-app purchases made through Google Play Billing.
Location Data: Approximate location (e.g., country or region), inferred by Google Analytics.
2. Purposes of Data Collection
The above data may be collected and processed for the following purposes:
App Functionality: To enable core features such as achievements, leaderboards, and progress saving.
Account Management: To authenticate users via Google Play Games Services and manage their gameplay data.
Analytics: To understand how users interact with the App, improve features, and monitor performance.
Advertising and Marketing: To deliver advertisements through AdMob and measure their performance.
Fraud Prevention, Security, and Compliance: To detect fraudulent activity, maintain App integrity, and comply with legal obligations.
3. Data Sharing
We do not sell, trade, or otherwise transfer user data to third parties. However, user data may be transmitted to and processed by Google LLC and its affiliates, in accordance with their respective privacy policies, when using the services integrated into the App.
Relevant privacy policies include:
<a 
  href="https://policies.google.com/privacy" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-blue-400 hover:underline"
>
  Google Privacy Policy
</a>
Google Play Games Services Privacy
Google AdMob Privacy & Security
4. Children’s Privacy
The App is rated PEGI 3 and is suitable for users of all ages, including children under 13. We do not knowingly collect personal data from children directly. Any data processed through the App is handled by Google’s services as described above and subject to their policies.
Parents or guardians who have concerns about their child’s data are encouraged to review Google’s privacy practices and may request deletion of Google Play Games profiles as described in Section 5 below.
5. Data Retention and Deletion
We do not retain any user data on our own servers. All data collected and processed in connection with the App is retained by Google in accordance with its data retention policies.
Users who wish to delete their account data and associated information can do so by deleting their Google Play Games profile:
Delete Google Play Games Profile
Users may also adjust their ad personalization and data collection settings through Google:
Google Ads Settings
For any additional data deletion requests specific to the App, please contact us directly at blueegg.dev@gmail.com.
6. Security
We rely on Google’s security measures to protect user data transmitted through its services. All data transmitted between the App and Google services is encrypted in transit.
7. Changes to This Privacy Policy
We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or integrations with third-party services. Any updates will be posted at this URL with a revised “Effective Date.”
8. Contact Us
If you have any questions or concerns regarding this Privacy Policy or our data practices, you may contact us at:
BlueEgg
blueegg.dev@gmail.com
          </p>
        </section>

        {/* EULA */}
        <section id="eula" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300">
            End-User License Agreement (EULA)
          </h2>
          <p className="text-gray-400">
            [Placeholder for EULA text. Replace this with your prepared
            content.]
          </p>
        </section>
      </main>
    </div>
  );
}

// NavButton Component
function NavButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative text-gray-300 hover:text-blue-400"
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </button>
  );
}
