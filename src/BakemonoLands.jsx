import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function BakemonoLands() {
  const [activePage, setActivePage] = useState("bakemono");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <div
        className="relative min-h-screen text-gray-200 font-sans"
        style={{
          backgroundImage: "url('/bakemono_bg.png')", // <-- your background image
          backgroundSize: "cover", // makes sure it covers entire page
          backgroundRepeat: "no-repeat", // prevents tiling

          backgroundPosition: "center", // centers the image
        }}
      >
        <Helmet>
          <title>BlueEgg - Bakemono Lands</title>
        </Helmet>

        {/* Cherry tree branch on the left, above the title */}
        <img
          src="/sakura_left.png"
          className="absolute top-20 left-0 w-40 md:w-56 z-10"
        />

        {/* Main Content */}
        <main className="px-8 py-12 max-w-6xl mx-auto space-y-24">
          {/* Description + Image */}
          <img
            src="/bakemono_title.png"
            alt="Bakemono Lands"
            className="max-h-72 w-auto mx-auto"
          />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-200 mt-4">
                Enter Bakemono Lands, where mythical spirits await your care.
                Hatch eggs, guide them through playful challenges, and watch
                them evolve into powerful companions!
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

            <div className="flex justify-center">
              <img
                src="/store_icon.png"
                alt="Bakemono Lands Icon"
                className="rounded-2xl shadow-lg max-h-44 object-cover w-auto h-auto"
              />
            </div>
            <img
              src="/sakura_right.png"
              className="absolute right-0 w-40 md:w-56 z-10"
            />
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">
              Privacy Policy
            </h2>

            <p className="text-gray-400">
              <span className="text-gray-200">
                Effective Date: 21.08.2025
                <br />
                Developer: BlueEgg <br />
                Contact: blueegg.dev@gmail.com
              </span>
              <br />
              <br /> Bakemono Lands (“the App”) is developed and provided by
              BlueEgg (“we,” “us,” or “our”). We respect your privacy and are
              committed to protecting it through this Privacy Policy. This
              document explains how we handle user information in connection
              with the App. <br />
              <br />
              <span className="text-gray-200">1. Information We Collect</span>
              <br /> We do not collect personal data directly. However, the App
              integrates with third-party services provided by Google (Firebase,
              Google Analytics, Google Play Games Services, Google Play Billing,
              and AdMob), which may collect and process the following categories
              of information on our behalf:
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>
                  App Activity: Information about how users interact with the
                  App (e.g., time spent, screens viewed).
                </li>
                <li>
                  App Information and Performance: Crash logs, diagnostic
                  reports, and performance data.
                </li>
                <li>
                  Device and Identifiers: Device identifiers such as Firebase
                  Installation ID or Advertising ID.
                </li>
                <li>
                  User Identifiers: A unique user ID and display name associated
                  with Google Play Games Services.
                </li>
                <li>
                  Personal Information: The Google Play Games profile name
                  chosen by the user.
                </li>
                <li>
                  Financial Information: Purchase history relating to in-app
                  purchases made through Google Play Billing.
                </li>
                <li>
                  Location Data: Approximate location (e.g., country or region),
                  inferred by Google Analytics.
                </li>
              </ul>
              <br />
              <span className="text-gray-200">
                2. Purposes of Data Collection
              </span>
              <br /> The above data may be collected and processed for the
              following purposes:
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>
                  App Functionality: To enable core features such as
                  achievements, leaderboards, and progress saving.
                </li>
                <li>
                  Account Management: To authenticate users via Google Play
                  Games Services and manage their gameplay data.{" "}
                </li>

                <li>
                  Analytics: To understand how users interact with the App,
                  improve features, and monitor performance.
                </li>

                <li>
                  Advertising and Marketing: To deliver advertisements through
                  AdMob and measure their performance.
                </li>

                <li>
                  Fraud Prevention, Security, and Compliance: To detect
                  fraudulent activity, maintain App integrity, and comply with
                  legal obligations.
                </li>
                <br />
              </ul>
              <span className="text-gray-200">3. Data Sharing</span>
              <br />
              We do not sell, trade, or otherwise transfer user data to third
              parties. However, user data may be transmitted to and processed by
              Google LLC and its affiliates, in accordance with their respective
              privacy policies, when using the services integrated into the App.
              Relevant privacy policies include:
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/googleplay/answer/3129346?hl=en&ref_topic=15525679&sjid=4323198596462636776-EU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Google Play Games Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/publisherpolicies/topic/10436799?hl=en&ref_topic=10502221&sjid=4323198596462636776-EU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Privacy Google AdMob Privacy & Security
                  </a>
                </li>
              </ul>
              <br />
              <span className="text-gray-200">4. Children’s Privacy</span>
              <br />
              The App is rated PEGI 3 and is suitable for users of all ages,
              including children under 13. We do not knowingly collect personal
              data from children directly. Any data processed through the App is
              handled by Google’s services as described above and subject to
              their policies. Parents or guardians who have concerns about their
              child’s data are encouraged to review Google’s privacy practices
              and may request deletion of Google Play Games profiles as
              described in Section 5 below.
              <br />
              <br />
              <span className="text-gray-200">
                5. Data Retention and Deletion
              </span>
              <br />
              We do not retain any user data on our own servers. All data
              collected and processed in connection with the App is retained by
              Google in accordance with its data retention policies. Users who
              wish to delete their account data and associated information can
              do so by deleting their Google Play Games profile:
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>
                  <a
                    href="https://support.google.com/googleplay/answer/9130646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Delete Google Play Games Profile
                  </a>
                </li>
              </ul>
              <br />
              Users may also adjust their ad personalization and data collection
              settings through Google:
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Google Ads Settings
                  </a>
                </li>
              </ul>
              <br />
              For any additional data deletion requests specific to the App,
              please contact us directly at{" "}
              <span className="text-gray-200">blueegg.dev@gmail.com.</span>
              <br />
              <br />
              <span className="text-gray-200">6. Security</span>
              <br />
              We rely on Google’s security measures to protect user data
              transmitted through its services. All data transmitted between the
              App and Google services is encrypted in transit.
              <br />
              <br />
              <span className="text-gray-200">
                7. Changes to This Privacy Policy
              </span>
              <br />
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, legal requirements, or integrations with
              third-party services. Any updates will be posted at this URL with
              a revised “Effective Date.”
              <br />
              <br />
              <span className="text-gray-200">8. Contact Us</span>
              <br />
              If you have any questions or concerns regarding this Privacy
              Policy or our data practices, you may contact us at:
              <br />
              <br />
              <span className="text-gray-200">blueegg.dev@gmail.com </span>
              <br />
              <span className="text-blue-300">BlueEgg Team</span>
            </p>
          </section>

          {/* EULA */}
          <section id="eula" className="space-y-4">
            <h2 className="text-3xl font-semibold text-blue-300">
              End User License Agreement (EULA)
            </h2>
            <p className="text-gray-400">
              <br />
              <span className="text-gray-200">
                Effective Date: 22.08.2025
                <br />
                Developer: BlueEgg
                <br />
                Contact: blueegg.dev@gmail.com
                <br />
                Title: Bakemono Lands
              </span>
              <br />
              <br />
              This End User License Agreement (“Agreement”) is a legal contract
              between you (“you,” “your,” or “User”) and BlueEgg (“we,” “us,” or
              “our”), the developer of the mobile game Bakemono Lands (“the
              Game”). By downloading, installing, or using the Game, you agree
              to be bound by the terms of this Agreement. If you do not agree,
              you must not download, install, or use the Game.
              <br />
              <br />
              <span className="text-gray-200">1. License Grant</span>
              <br />
              Subject to your compliance with this Agreement, we grant you a
              limited, non-exclusive, non-transferable, non-sublicensable,
              revocable license to:
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>
                  Download, install, and use the Game on a compatible mobile
                  device that you own or control; and
                </li>
                <li>
                  Access and play the Game for your personal, non-commercial
                  entertainment purposes only.
                </li>
              </ul>
              <br />
              <span className="text-gray-200">
                2. Ownership and Intellectual Property
              </span>
              <br />
              All rights, title, and interest in and to the Game, including but
              not limited to all graphics, artwork, designs, characters
              (including “bakemono spirits”), animations, music, software code,
              and associated intellectual property, are owned by us or our
              licensors. This Agreement does not transfer any ownership rights
              to you.
              <br />
              <br />
              <span className="text-gray-300">You agree not to:</span>
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>Copy, modify, or create derivative works of the Game; </li>
                <li>Reverse-engineer, decompile, or disassemble the Game;</li>
                <li>
                  Distribute, rent, lease, or sublicense the Game to third
                  parties;
                </li>
                <li>
                  Use the Game for commercial purposes without our prior written
                  consent.
                </li>
              </ul>
              <br />
              <span className="text-gray-200">3. Fan Works Exception</span>
              <br />
              We recognize and support the creativity of our community. Subject
              to the following conditions, we grant users a limited,
              non-commercial license to create fan art, fanfiction, comics,
              videos, or similar creative works (“Fan Works”) inspired by
              Bakemono Lands:
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>
                  Fan Works must not be sold, licensed, or otherwise exploited
                  for commercial purposes without our prior written consent.
                </li>
                <li>
                  Fan Works must visibly credit Bakemono Lands as the original
                  source material.
                </li>
                <li>
                  Fan Works must not be presented as official, endorsed, or
                  affiliated with us.
                </li>
                <li>
                  Fan Works must not infringe on the rights of others, include
                  inappropriate or harmful content, or violate applicable laws.
                </li>
              </ul>
              <br />
              We reserve the right to revoke this permission at any time if
              these conditions are not met.
              <br />
              <br />
              <span className="text-gray-200">
                4. Eligibility and Age Restrictions
              </span>
              <br />
              The Game is rated PEGI 3 and is suitable for players of all ages.
              Users under the age of 13 must have the consent of a parent or
              legal guardian to use the Game. Parents and guardians are
              responsible for monitoring their child’s use of the Game.
              <br />
              <br />
              <span className="text-gray-200">5. Internet Connectivity</span>
              <br />
              The Game can be played offline. However, certain features, such as
              cloud saving via Google Play Games Services, rewarded
              advertisements, and in-app purchases, require an active internet
              connection.
              <br />
              <br />
              <span className="text-gray-200">
                6. Advertisements and In-App Purchases
              </span>
              <br />
              <ul className="ml-4">
                <span className="text-gray-300">6.1 Advertisements</span>
                <br />
                The Game may display third-party advertisements. Users may
                choose to view rewarded advertisements in exchange for in-game
                benefits, such as additional currency or extra “revives.”
                <br />
                <span className="text-gray-200">6.2 In-App Purchases</span>
                <br />
                The Game offers optional in-app purchases, including but not
                limited to: Additional daily currency (“Heavenly Tokens”) Extra
                shelter space for mythical beasts Permanent removal of
                advertisements All in-app purchases are processed through the
                relevant app store provider (e.g., Google Play Store) and are
                subject to their payment terms and policies. Purchases are
                non-refundable except as required by applicable law or platform
                policies.
              </ul>
              <br />
              <span className="text-gray-200">7. User Data and Privacy</span>
              <br />
              The Game does not create accounts directly. Instead, it may
              integrate with Google Play Games Services for authentication and
              cloud saving. Data collection, storage, and processing are handled
              by Google and subject to our{" "}
              <a
                href="#privacy"
                className="text-blue-400 hover:underline hover:text-blue-600"
              >
                Privacy Policy
              </a>{" "}
              and Google’s privacy practices.
              <br />
              <br />
              <span className="text-gray-200">
                8. Updates and Modifications
              </span>
              <br />
              We may release updates, patches, or modifications to the Game from
              time to time to improve functionality, introduce new content, or
              address security and technical issues. We reserve the right to
              modify, suspend, or discontinue the Game, or any part thereof, at
              our discretion without prior notice.
              <br />
              <br />
              <span className="text-gray-200">9. Termination</span>
              <br />
              This Agreement is effective until terminated. We may terminate
              this Agreement and revoke your license if you violate its terms.
              Upon termination, you must cease all use of the Game and uninstall
              it from your devices.
              <br />
              <br />
              <span className="text-gray-200">10. Disclaimers</span>
              <br />
              The Game is provided “as is” and “as available” without warranties
              of any kind, express or implied. We disclaim all warranties,
              including but not limited to:
              <br />
              <ul className="list-disc ml-6 text-gray-400">
                <li>Fitness for a particular purpose,</li>
                <li>Non-infringement,</li>
                <li>Availability, accuracy, or uninterrupted operation.</li>
              </ul>
              <br />
              We make no guarantees that the Game will be error-free, secure, or
              compatible with all devices.
              <br />
              <br />
              <span className="text-gray-200">11. Limitation of Liability</span>
              <br />
              To the maximum extent permitted by law, we shall not be liable
              for:
              <ul className="list-disc ml-6 text-gray-400">
                <li>
                  Any indirect, incidental, special, consequential, or punitive
                  damages;
                </li>
                <li>Loss of data, gameplay progress, or in-app purchases;</li>
                <li>
                  Issues caused by third-party advertisements or services
                  integrated into the Game.{" "}
                </li>
              </ul>
              <br />
              Your sole remedy in the event of dissatisfaction with the Game is
              to discontinue use of the Game.
              <br />
              <br />
              <span className="text-gray-200">12. Governing Law</span>
              <br />
              This Agreement shall be governed by and construed in accordance
              with the laws of Poland, without regard to conflict of law
              principles.
              <br />
              <br />
              <span className="text-gray-200">13. Contact Information</span>
              <br />
              For questions, complaints, or claims regarding this Agreement,
              please contact us at:{" "}
              <span className="text-gray-200">
                blueegg.dev@gmail.com
                <br />
                <br />
                Acceptance
                <br />
                By downloading, installing, or using Bakemono Lands, you
                acknowledge that you have read, understood, and agreed to the
                terms of this End User License Agreement.
                <br />
                <br />
                blueegg.dev@gmail.com
              </span>
              <br />
              <span className="text-blue-300">BlueEgg Team</span>
            </p>
          </section>
        </main>
      </div>
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
