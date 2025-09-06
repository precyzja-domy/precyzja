import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function App() {
  const [activePage, setActivePage] = useState("faq");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Helmet>
        <title>Bakemono Lands - FAQ</title>
      </Helmet>
      {/* Main Content */}
      {/* Main Content */}
      <main className="px-8 py-12 max-w-5xl mx-auto space-y-24">
        {/* FAQ*/}
        <section id="about" className="space-y-8">
          <h2 className="text-3xl font-semibold text-blue-300">
            Frequently Asked Questions
          </h2>

          {/* FAQ 1 */}
          <div className="space-y-2">
            <p className="text-gray-420 max-w-3xl font-bold">
              1. How do I delete my player account and all associated data?
            </p>
            <p className="text-gray-400 max-w-3xl">
              <b>What you need to know: </b>Your player account is managed via
              Google Play Games, not through our in-game interface. To remove
              your game data (including progress, achievements, or leaderboard
              entries), you must do so through the Google Play Games app or
              website.
              <br />
              <br />
              <b>On Android (via the Play Games app):</b>
              <ul className="list-disc list-inside space-y-1">
                <li>Open the Play Games app on your Android device.</li>
                <li>
                  Tap <b>More ⋯</b> (the three-dot menu) at the top, then go to{" "}
                  <b>Settings</b>.
                </li>
                <li>
                  Tap <b>Delete Play Games account & data</b>.
                </li>
                <li>
                  Under <b>Delete individual game data</b>, locate{" "}
                  <b>Bakemono Lands</b>, and tap <b>Delete</b> to remove that
                  specific data.
                </li>
              </ul>
              <br />
              <p>-</p>
              <p className="text-gray-400 w-3xl">
                If you wish to delete your entire Play Games profile and all
                associated games/data, tap <b>Permanently delete</b>.
              </p>
              <br />
              <b>Via Web (desktop browser):</b>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Navigate to{" "}
                  <a
                    href="https://play.google.com/games/profile"
                    target="_blank"
                    className="text-blue-300 underline"
                  >
                    play.google.com/games/profile
                  </a>{" "}
                  in your browser.
                </li>
                <li>
                  Click <b>Data</b>, then select{" "}
                  <b>Delete Play Games Account & Data</b>.
                </li>
                <li>
                  Choose <b>Bakemono Lands</b> under{" "}
                  <b>Delete individual game data</b> and click <b>Delete</b>.
                </li>
              </ul>
              <br />
              <b>Important:</b> Deleting data via Google Play Games only removes
              what is stored in Google’s systems. Local game data stored on your
              device may still remain and should be cleared separately if you
              want to fully reset your progress (see FAQ #2).
              <br />
              <br />
              For full instructions, check the{" "}
              <a
                href="https://support.google.com/googleplay/answer/9130646?hl=en"
                target="_blank"
                className="text-blue-300 underline"
              >
                Google Help Center
              </a>
              .
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="space-y-2">
            <p className="text-gray-420 max-w-3xl font-bold">
              2. Will deleting Google Play Games data erase everything?
            </p>
            <p className="text-gray-400 max-w-3xl">
              Not necessarily. Google Play Games deletion only removes the data
              stored in Google’s systems (achievements, leaderboards, cloud
              saves, etc.).
              <br />
              <br />
              Since Bakemono Lands also functions offline, local game progress
              stored on your device may still remain. If the app is reinstalled
              or reconnected, that local data might be used to repopulate your
              progress in the online database.
              <br />
              <br />
              <b>To completely clear all progress:</b>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Delete Bakemono Lands data from Google Play Games (see FAQ
                  #1).
                </li>
                <li>
                  On your device, go to{" "}
                  <b>
                    Settings → Apps → [Bakemono Lands] → Storage → Clear Data
                  </b>
                  , or uninstall the app entirely.
                </li>
                <li>
                  Optionally, contact our support team to request deletion of
                  any data we manage on our servers.
                </li>
              </ul>
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="space-y-2">
            <p className="text-gray-420 max-w-3xl font-bold">
              3. Can I reset my game progress without deleting my Play Games
              profile?
            </p>
            <p className="text-gray-400 max-w-3xl">
              Yes. Instead of deleting your entire Play Games account:
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Use the <b>Delete individual game data</b> option (as detailed
                  above) to remove progress only for our specific game.
                </li>
                <li>
                  After deleting, please wait for synchronization—then re-launch
                  the game to start fresh.
                </li>
              </ul>
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="space-y-2">
            <p className="text-gray-420 max-w-3xl font-bold">
              4. Why does it take time for the game to forget my progress after
              deletion?
            </p>
            <p className="text-gray-400 max-w-3xl">
              Data deletion may not be instant. It’s common that Google Play
              Games needs a little time to sync and fully clear game-related
              information. If the game still remembers old progress, wait a
              short while before relaunching.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="space-y-2">
            <p className="text-gray-420 max-w-3xl font-bold">
              5. Still seeing data after deleting—what can I do next?
            </p>
            <p className="text-gray-400 max-w-3xl">
              Some users report residual synced data. As a workaround, clear app
              data in device settings:
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Go to <b>Settings → Apps → [Bakemono Lands] → Storage</b>,
                  then tap <b>Clear Data</b> or <b>Clear Storage</b>.
                </li>
              </ul>
              This clears local cache and may help restart the game freshly—but
              it doesn't affect Google Play Games–stored data.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="space-y-2">
            <p className="text-gray-420 max-w-3xl font-bold">
              6. Who should I contact if I can't delete my data or see old
              progress?
            </p>
            <p className="text-gray-400 max-w-3xl">
              If issues persist:
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Check the{" "}
                  <a
                    href="https://support.google.com/googleplay/answer/9130646?hl=en"
                    target="_blank"
                    className="text-blue-300 underline"
                  >
                    Google Play Games Help Community
                  </a>{" "}
                  for additional tips.
                </li>
                <li>
                  Contact Google Support if you're unable to remove your Play
                  Games data.
                </li>
                <li>
                  For developer-related data or account help—not tied to
                  Google—reach out to our support team via{" "}
                  <b>[blueegg.dev@gmail.com]</b>.
                </li>
              </ul>
            </p>
          </div>
        </section>

        {/* Contact us */}
        <section id="contact" className="space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300">
            Didn't find what you were looking for? Reach out to us!
          </h2>
          <p className="text-gray-200">Email: blueegg.dev@gmail.com</p>
          {/* Add company phone someday <p className="text-gray-400">Phone:</p> */}
        </section>
      </main>
    </div>
  );
}

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
