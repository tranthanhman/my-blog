import React, { useEffect, useState } from 'react';

const ListPost: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]); // Replace `any` with the type of your posts if you have it

  useEffect(() => {
    console.log('effect')
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.BASE_URL}/articles?username=nataliedeweerd`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <ul className="space-y-8">
      {posts.length > 0 && posts.map((post) => {
        return (
          <li>
            <article>
              <h2 className="text-2xl">[{post?.tag_list?.[0]}] {post?.title}</h2>
              <span className="italic text-xs">4 MONTHS AGO</span>
              <p className="truncate my-2">{post?.description}</p>
              <button className="border border-solid px-3 py-1.5 border-gray-950 hover:bg-gray-950 hover:text-white transition-all duration-300">
                Read more →
              </button>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default ListPost;
