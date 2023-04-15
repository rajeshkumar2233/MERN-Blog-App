import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  useEffect(() => {
    const sendRequest = async () => {
      const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`).catch((err) => console.log(err));
      const data = await res.data;
      return data;
    };

    const fetchData = async () => {
      const data = await sendRequest();
      setUser(data.user);
    };
    fetchData();
  }, [id]);

  console.log(user);
  return (
    <div>
      {" "}
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={user.name}
          />
        ))}
    </div>
  );
};

export default UserBlogs;
