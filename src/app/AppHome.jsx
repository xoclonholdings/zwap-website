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
            <h1 className="landing-title-top">
              Discover More.
            </h1>

            <h2 className="landing-title-bottom">
              Discover You.
            </h2>
          </div>

          <p className="landing-sub">
            <GradientZwap /> is a Discovery App.
          </p>

          <p className="landing-sub">
            Move. Play. Learn. Stream. Shop. Reflect.
            Start where you are.
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
          What is a Discovery App?
        </div>

        <h2 className="landing-trust-title">
          A place to explore yourself.
        </h2>

        <p className="landing-trust-copy">
          Most apps push you to do more. ZWAP! gives you ways to explore.
          Movement. Play. Education. Sound. Reward. Reflection.
        </p>

        <ul className="landing-trust-points">
          <li>
            You are not broken.
          </li>

          <li>
            You do not need another blueprint.
          </li>

          <li>
            You need space to explore what is already there.
          </li>
        </ul>
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
