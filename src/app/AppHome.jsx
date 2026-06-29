import heroPhoneMockup from "../assets/hero_phone_mockup.png";
import googlePlayLogo from "../assets/google_play_logo.PNG";
import usePublicPosts from "../hooks/usePublicPosts";
import { XIcon, TikTokIcon, MailIcon } from "./icons";

function GradientZwap() {
  return <span className="gradient-zwap">ZWAP!</span>;
}

function AppleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.7 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.1 9 .7 1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-.1 2.7-1.1.8-1 1.2-2 1.2-2.1-.1 0-2.3-.9-2.3-5.1ZM14.5 6.4c.6-.7 1-1.7.9-2.6-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 .1 2-.5 2.7-1.2Z" />
    </svg>
  );
}

function LandingLatestUpdates({
  posts,
  featuredPost,
  isLoading,
  loadError,
  onNews,
  onBlog,
}) {
  const visiblePosts = [
    featuredPost,
    ...posts.filter((post) => post.id !== featuredPost?.id),
  ]
    .filter(Boolean)
    .slice(0, 3);

  if (isLoading || loadError || visiblePosts.length === 0) {
    return null;
  }

  return (
    <section className="landing-latest">
      <div className="landing-latest-head">
        <div className="landing-latest-eyebrow">
          Connect with <GradientZwap />
        </div>

        <h2 className="landing-latest-title">
          News, Blog, and Updates
        </h2>

        <p className="landing-latest-sub">
          Follow the build. Read the story. Stay close as <GradientZwap />
          moves toward launch.
        </p>
      </div>

      <div className="landing-latest-grid">
        {visiblePosts.map((post) => (
          <article
            key={post.id}
            className={`landing-latest-card ${
              post.featured ? "is-featured" : ""
            }`}
          >
            <div className="landing-latest-card-tag">
              {post.featured ? "Featured" : post.category || "Update"}
            </div>

            <h3>{post.title}</h3>

            <p>{post.excerpt}</p>

            <div className="landing-latest-meta">
              <span>{post.readTime || "4 min read"}</span>

              {post.date ? (
                <>
                  <span>•</span>
                  <span>{post.date}</span>
                </>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <div className="landing-latest-actions">
        <button type="button" onClick={onNews}>
          View News
        </button>

        <button type="button" onClick={onBlog}>
          View Blog
        </button>
      </div>
    </section>
  );
}

export default function AppHome({
  openEarlyAccessModal,
  onNews,
  onBlog,
  onContact,
  onGooglePlay,
  onAppleStore,
}) {
  const { posts, featuredPost, isLoading, loadError } = usePublicPosts();

  const storeButtonStyle = {
    minWidth: "148px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "11px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(174, 132, 255, 0.42)",
    background:
      "linear-gradient(180deg, rgba(18,20,38,0.92) 0%, rgba(10,12,26,0.98) 100%)",
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 700,
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px rgba(0,0,0,0.22)",
  };

  return (
    <>
      <main className="landing-main">
        <section className="landing-copy">
          <div className="landing-title-wrap">
            <div
              style={{
                color: "rgba(245,247,255,0.72)",
                fontSize: "clamp(13px, 3.5vw, 16px)",
                fontWeight: 900,
                letterSpacing: "0.12em",
                lineHeight: 1.45,
                marginBottom: "14px",
                textTransform: "uppercase",
              }}
            >
              Stay Curious. Discover More. Discover YOU.
            </div>

            <h1 className="landing-title-top">
              The world&apos;s first Discovery App.
            </h1>

            <h2 className="landing-title-bottom">
              More than fitness.
              <br />
              More than productivity.
              <br />
              More than rewards.
            </h2>
          </div>

          <p className="landing-sub">
            <GradientZwap /> helps you discover yourself.
          </p>

          <p className="landing-sub">
            Because sometimes the answers you&apos;re looking for...
            <br />
            ...have been within you all along.
          </p>

          <div className="landing-cta-group">
            <button
              className="landing-cta"
              onClick={() => openEarlyAccessModal("preview")}
            >
              Start Exploring
            </button>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <button type="button" onClick={onAppleStore} style={storeButtonStyle}>
                <AppleIcon />
                <span>App Store</span>
              </button>

              <button type="button" onClick={onGooglePlay} style={storeButtonStyle}>
                <img
                  src={googlePlayLogo}
                  alt="Google Play"
                  style={{
                    width: "18px",
                    height: "18px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <span>Google Play</span>
              </button>
            </div>

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
                onClick={onContact}
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

      <section className="landing-trust">
        <div className="landing-trust-eyebrow">
          Most apps take.
        </div>

        <h2 className="landing-trust-title">
          <GradientZwap /> gives back.
        </h2>

        <p className="landing-trust-copy">
          Explore not only the world around you, but the person experiencing it.
          <br />
          <GradientZwap /> is your mirror.
        </p>

        <p className="landing-trust-copy">
          Through movement, play, education, and more, <GradientZwap /> keeps
          the score and reveals you to YOU.
        </p>
      </section>

      <section className="landing-powered">
        <div className="landing-powered-eyebrow">
          Inside ZWAP!
        </div>

        <h2 className="landing-powered-title">
          Six paths. One journey.
        </h2>

        <p className="landing-powered-copy">
          Each part of ZWAP! gives you another way to explore.
          Keep it simple. Keep moving. See what shows up.
        </p>

        <div className="landing-powered-grid">
          <div className="landing-powered-card">
            <h3>Discover</h3>
            <p>
              Exploration of the Self.
            </p>
          </div>

          <div className="landing-powered-card">
            <h3>Move</h3>
            <p>
              Exploration through Movement.
            </p>
          </div>

          <div className="landing-powered-card">
            <h3>Play</h3>
            <p>
              Exploration through Play.
            </p>
          </div>

          <div className="landing-powered-card">
            <h3>Learn</h3>
            <p>
              Exploration through Education.
            </p>
          </div>

          <div className="landing-powered-card">
            <h3>Stream</h3>
            <p>
              Exploration through Sound.
            </p>
          </div>

          <div className="landing-powered-card">
            <h3>Shop</h3>
            <p>
              Exploration through Reward.
            </p>
          </div>
        </div>
      </section>

      <LandingLatestUpdates
        posts={posts}
        featuredPost={featuredPost}
        isLoading={isLoading}
        loadError={loadError}
        onNews={onNews}
        onBlog={onBlog}
      />
    </>
  );
}
