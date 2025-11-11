import React from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <PostCard title="Post 1" description="This is the description of Post 1." />
      <PostCard title="Post 2" description="This is the description of Post 2." />
    </div>
  );
};

export default PostsPage;
