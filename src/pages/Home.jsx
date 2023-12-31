// /* eslint-disable no-unused-vars */
// import { useState, useEffect } from "react";
// import { Card } from "../components";
// import appwriteService from "../appwrite/service";

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//         console.log("Posts Received");
//       }
//     });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {posts.map((post) => (
//         <Card
//           key={post.$id}
//           post={post}
//           //Displaying the first 100 characters of the content as a description
//         />
//       ))}
//     </div>
//   );
// }

// export default Home;

import { useEffect, useState } from "react";
import appwriteService from "../appwrite/service";
import { Card, Container } from "../components";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Appwrite services called");
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        console.log("Received Posts:", posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                <Link to="/login">Loading...</Link>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Card {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
