export default function AppFooter({
  onPrivacy,
  onTerms,
  onSitemap,
}) {
  return (
    <footer className="landing-footer">
      <div className="landing-footer-links">
        <button type="button" onClick={onPrivacy}>
          Privacy Policy
        </button>

        <button type="button" onClick={onTerms}>
          Terms of Service
        </button>

        <button type="button" onClick={onSitemap}>
          Sitemap
        </button>
      </div>

      <div className="landing-footer-copy">
        © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
      </div>
    </footer>
  );
}