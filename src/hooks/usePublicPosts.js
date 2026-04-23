import { useEffect, useMemo, useState } from "react";

const PUBLIC_GET_POSTS_URL = "/.netlify/functions/public-get-posts";

function normalizePost(post) {
  return {
    id: post._id || post.id || "",
    title: post.title || "",
    slug: post.slug || "",
    excerpt: post.excerpt || "",
    body: post.body || "",
    category: post.category || "news",
    tags: Array.isArray(post.tags) ? post.tags : [],
    coverImageUrl: post.coverImageUrl || "",
    authorName: post.authorName || "",
    sponsorName: post.sponsorName || "",
    date: post.date || "",
    readTime: post.readTime || "4 min read",
    status: post.status || "published",
    featured: Boolean(post.featured),
    shareToSocial: Boolean(post.shareToSocial),
    sendNewsletter: Boolean(post.sendNewsletter),
    createdAt: post.createdAt || "",
    updatedAt: post.updatedAt || "",
    publishedAt: post.publishedAt || "",
  };
}

export default function usePublicPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        setIsLoading(true);
        setLoadError("");

        const response = await fetch(PUBLIC_GET_POSTS_URL);

        if (!response.ok) {
          throw new Error("Failed to load public posts.");
        }

        const data = await response.json();

        if (!isMounted) return;

        setPosts((Array.isArray(data) ? data : []).map(normalizePost));
      } catch (error) {
        if (!isMounted) return;
        setLoadError(error.message || "Failed to load public posts.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredPost = useMemo(() => {
    return posts.find((post) => post.featured) || null;
  }, [posts]);

  const newsPosts = useMemo(() => {
    return posts.filter((post) => post.category === "news");
  }, [posts]);

  const blogPosts = useMemo(() => {
    return posts.filter((post) => post.category === "blog");
  }, [posts]);

  return {
    posts,
    featuredPost,
    newsPosts,
    blogPosts,
    isLoading,
    loadError,
  };
}