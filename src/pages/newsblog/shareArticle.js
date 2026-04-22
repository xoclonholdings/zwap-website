export function getArticleUrl(article, type = "news") {
  if (typeof window === "undefined") return "";

  const safeType = type === "blog" ? "blog" : "news";
  return `${window.location.origin}/${safeType}/${article.slug || article.id}`;
}

export async function shareArticle(article, type = "news") {
  const url = getArticleUrl(article, type);
  const shareText = `${article.title} | ZWAP!`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: article.title,
        text: article.excerpt,
        url,
      });
      return;
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(`${shareText}\n${url}`);
      window.alert("Article link copied to clipboard.");
      return;
    }

    window.prompt("Copy this article link:", url);
  } catch (error) {
    console.error("Share failed:", error);
  }
}