import React from "react";
import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <Header/>
      <p>List of users will appear here.</p>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default UsersPage;
