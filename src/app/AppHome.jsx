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
          Latest from <GradientZwap />
        </div>

        <h2 className="landing-latest-title">
          Platform Updates & Insights
        </h2>

        <p className="landing-latest-sub">
          Follow launch notes, platform explainers, sponsor news, and ecosystem
          updates as <GradientZwap /> moves toward public rollout.
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
            <h1 className="landing-title-top">
              Move. Play. Progress.
            </h1>

            <h2 className="landing-title-bottom">
              <GradientZwap /> turns consistency into utility.
            </h2>
          </div>

          <p className="landing-sub">
            ZWAP! is a mobile progression app where movement,
            games, and consistency unlock zPts, Shop utility,
            and future ecosystem access.
          </p>

          <p className="landing-sub">
            Built with reward caps, delayed value, and
            controlled progression from day one.
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
          How rewards work
        </div>

        <h2 className="landing-trust-title">
          Progress first. Utility later.
        </h2>

        <p className="landing-trust-copy">
          ZWAP! does not issue unlimited rewards. Users earn zPts
          through movement, play, learning, and daily activity.
          Rewards are capped, processed through ZWAP!’s reward
          system, and built around consistency instead of instant
          extraction.
        </p>

        <ul className="landing-trust-points">
          <li>
            zPts are off-chain progression points, not instant cash.
          </li>

          <li>
            Shop utility comes before Swap access.
          </li>

          <li>
            Future ecosystem access unlocks through controlled progression.
          </li>
        </ul>
      </section>

      <section className="landing-powered">
        <div className="landing-powered-eyebrow">
          What powers ZWAP!
        </div>

        <h2 className="landing-powered-title">
          Rewards need structure, not hype.
        </h2>

        <p className="landing-powered-copy">
          ZWAP! is designed around multiple support layers including
          Shop utility, sponsor-backed rewards, subscriptions,
          partnerships, wellness campaigns, and future enterprise
          programs.
        </p>

        <div className="landing-powered-grid">
          <div className="landing-powered-card">
            <h3>Shop Utility</h3>
            <p>
              zPts can unlock practical items, boosts, cosmetics,
              and future reward options before Swap access.
            </p>
          </div>

          <div className="landing-powered-card">
            <h3>Sponsor Support</h3>
            <p>
              Partners can support campaigns, challenges, perks,
              and rewards without controlling emission logic.
            </p>
          </div>

          <div className="landing-powered-card">
            <h3>Future Programs</h3>
            <p>
              Enterprise wellness, education, and partner programs
              can expand the ecosystem without changing the core loop.
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