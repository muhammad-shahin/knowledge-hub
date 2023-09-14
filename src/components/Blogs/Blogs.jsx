import { useEffect, useState } from "react";
import Bookmarks from "../Bookmarks Bar/Bookmarks";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [totalReadingTime, setTotalReadingTime] = useState(0);
  const [imgSrc, setImgSrc] = useState("../../../images/bookmark.svg");

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //   handle bookmark on click
  const handleBookmark = (blog) => {
    if (bookmarks.includes(blog)) {
      alert("Already in bookmark");
    } else {
      blog.isBookmarked = true;
      const updateBookmarks = [...bookmarks, blog];
      setBookmarks(updateBookmarks);
      console.log(blog);
    }
  };
  //   handle mark as read on click
  const handleMarkAsRead = (readingTime, blog) => {
    if (bookmarks.includes(blog)) {
      const totalReadTime = totalReadingTime + readingTime;
      setTotalReadingTime(totalReadTime);
      const indexToRemove = bookmarks.indexOf(blog);
      if (indexToRemove !== -1) {
        bookmarks.splice(indexToRemove, 1);
        blog.isBookmarked = false;
      }
    } else {
      alert("Already Marked As Read");
    }
  };
  return (
    // blogs section
    <section className="container mx-auto flex lg:flex-row flex-col justify-between items-start py-8 gap-5">
      {/* left side content */}
      <div className="">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}
            imgSrc={imgSrc}
          ></Blog>
        ))}
      </div>

      {/* right side content */}
      <Bookmarks
        bookmarks={bookmarks}
        totalReadTime={totalReadingTime}
      ></Bookmarks>
    </section>
  );
};

export default Blogs;
