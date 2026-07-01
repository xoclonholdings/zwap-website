import heroPhoneMockup from "../assets/hero_phone_mockup.png";
import usePublicPosts from "../hooks/usePublicPosts";
import { XIcon, TikTokIcon, MailIcon } from "./icons";

function GradientZwap() {
  return <span className="gradient-zwap">ZWAP!</span>;
}

function FeatureIcon({ type }) {
  if (type === "fitness") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 29.5c8.8.6 16.3-2.8 23.2-10.5l5.3 9.1c2.8 4.8.1 8.9-5.5 8.9H13.2C8.8 37 6.3 34.3 9 29.5Z" />
        <path d="M26.6 19.7 31.9 29M19.5 24.5l4.6 7.7M12.3 28.5l3.5 5.8" />
      </svg>
    );
  }

  if (type === "gaming") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14.3 17h19.4c4.2 0 7.3 3.5 7.3 8.7 0 5.9-3.5 10.3-7.4 10.3-2.5 0-3.7-2.2-5.5-4.2h-8.2c-1.8 2-3 4.2-5.5 4.2-3.9 0-7.4-4.4-7.4-10.3 0-5.2 3.1-8.7 7.3-8.7Z" />
        <path d="M15.5 25h7M19 21.5v7M31.8 24.3h.2M36 28.3h.2" />
      </svg>
    );
  }

  if (type === "shopping") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 18h24l2.5 21h-29L12 18Z" />
        <path d="M18 18c0-5.2 2.4-8 6-8s6 2.8 6 8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 20h28v20H10V20Z" />
      <path d="M8 14h32v6H8v-6Z" />
      <path d="M24 14v26M18 14c-5.5-1.8-5.2-7.8.1-7.2 3.2.4 5.9 7.2 5.9 7.2s2.7-6.8 5.9-7.2c5.3-.6 5.6 5.4.1 7.2" />
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
}) {
  const { posts, featuredPost, isLoading, loadError } = usePublicPosts();

  const featureItems = [
    { icon: "fitness", label: "More than fitness." },
    { icon: "gaming", label: "More than gaming." },
    { icon: "shopping", label: "More than shopping." },
    { icon: "rewards", label: "More than rewards." },
  ];

  return (
    <>
      <main className="landing-main">
        <section className="landing-copy">
          <div className="landing-title-wrap">
            <div className="landing-hero-eyebrow">
              Stay Curious. Discover More. Discover YOU.
            </div>

            <h1 className="landing-title-top">
              <span className="landing-title-kicker">The world&apos;s first</span>
              <span className="landing-title-category">DISCOVERY APP</span>
            </h1>

            <div
              className="landing-feature-list"
              aria-label="ZWAP! is more than these categories"
              style={{
                width: "min(100%, 336px)",
                transform: "translateX(44px)",
              }}
            >
              {featureItems.map((item) => (
                <div className="landing-feature-item" key={item.label}>
                  <span className="landing-feature-icon">
                    <FeatureIcon type={item.icon} />
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="landing-sub landing-sub-anchor">
            <GradientZwap /> helps you
            <br />
            rediscover yourself.
          </p>

          <p className="landing-sub landing-sub-reflection">
            Because the only person you need to become...
            <br />
            ...is yourself.
          </p>

          <div className="landing-cta-group">
            <button
              className="landing-cta"
              onClick={() => openEarlyAccessModal("preview")}
            >
              Start Exploring
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
          Most apps take. Most apps distract.
        </div>

        <h2 className="landing-trust-title">
          <GradientZwap /> gives back.
        </h2>

        <p className="landing-trust-copy">
          Explore not only the world around you, but the person experiencing it.
        </p>

        <h2 className="landing-trust-title landing-trust-title-spaced">
          <GradientZwap /> is your mirror.
        </h2>

        <p className="landing-trust-copy">
          Through movement, play, education, and more, ZWAP! keeps the score and
          reveals you to <strong>YOU.</strong>
        </p>
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
