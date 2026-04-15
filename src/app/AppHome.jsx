import heroPhoneMockup from "../assets/hero_phone_mockup.png";
import { XIcon, TikTokIcon, MailIcon } from "./icons";

export default function AppHome({
  openEarlyAccessModal,
  setIsMailOpen,
}) {
  return (
    <>
      <main className="landing-main">
        <section className="landing-copy">
          <div className="landing-title-wrap">
            <h1 className="landing-title-top">
              Most apps waste your time.
            </h1>

            <h2 className="landing-title-bottom">
              <span className="landing-title-accent">ZWAP!</span>{" "}
              turns it into rewards.
            </h2>
          </div>

          <p className="landing-sub">
            It’s giving...earn smarter not harder.
          </p>

          <div className="landing-cta-group">
            <button
              className="landing-cta"
              onClick={() => openEarlyAccessModal("preview")}
            >
              Lock In. Early.
            </button>

            <div className="landing-socials">
              <a
                href="https://x.com/ZWAP_Online"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <XIcon />
              </a>

              <a
                href="https://www.tiktok.com/@zwap_online?_t=ZS-8xkQk1Fq1gV&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>

              <button
                type="button"
                onClick={() => setIsMailOpen(true)}
                aria-label="Email"
              >
                <MailIcon />
              </button>
            </div>
          </div>
        </section>

        <section className="landing-visual">
          <img
            src={heroPhoneMockup}
            alt="ZWAP! app hero mockup"
          />
        </section>
      </main>
    </>
  );
}