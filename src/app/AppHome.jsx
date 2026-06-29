import heroPhoneMockup from "../assets/hero_phone_mockup.png";
import usePublicPosts from "../hooks/usePublicPosts";
import { XIcon, TikTokIcon, MailIcon } from "./icons";

function GradientZwap() {
  return <span className="gradient-zwap">ZWAP!</span>;
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

        <div className="landing-trust-eyebrow">
          Most apps distract.
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
