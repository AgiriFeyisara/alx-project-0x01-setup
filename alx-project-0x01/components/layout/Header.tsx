import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">ALX Project</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/users">Users</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
