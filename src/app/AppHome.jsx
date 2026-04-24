import heroPhoneMockup from "../assets/hero_phone_mockup.png";
import usePublicPosts from "../hooks/usePublicPosts";
import { XIcon, TikTokIcon, MailIcon } from "./icons";

function LandingLatestUpdates({ onNews, onBlog }) {
  const { posts, featuredPost, isLoading, loadError } = usePublicPosts();

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
        <div className="landing-latest-eyebrow">Latest from ZWAP!</div>

        <h2 className="landing-latest-title">
          Platform Updates & Insights
        </h2>

        <p className="landing-latest-sub">
          Follow launch notes, platform explainers, sponsor news, and ecosystem
          updates as ZWAP! moves toward public rollout.
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
  setIsMailOpen,
  onNews,
  onBlog,
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

      <LandingLatestUpdates onNews={onNews} onBlog={onBlog} />
    </>
  );
}