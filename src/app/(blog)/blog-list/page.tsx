import React from "react";
import { Metadata } from "next";
import BlogListMain from "@/pages/blog/blog-list";

export const metadata: Metadata = {
  title: "The-X-Media - Blog List page",
};

const BlogListPage = () => {
  return (
    <BlogListMain/>
  );
};

export default BlogListPage;
