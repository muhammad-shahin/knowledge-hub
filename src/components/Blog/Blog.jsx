import PropTypes from "prop-types";
const Blog = ({ blog, handleBookmark, handleMarkAsRead, imgSrc }) => {
  const {
    cover,
    title,
    author_name,
    author_image,
    posted_date,
    reading_time,
    hash_tag,
    isBookmarked
  } = blog;

  return (
    <div>
      {/* single blog section */}
      <div className="mb-5 lg:w-auto w-[90%] mx-auto ">
        <img
          src={cover}
          alt="Blog Cover Photo"
          className="lg:w-[50vw] w-[100vw] h-[200px] md:h-[300px] lg:h-[500px] rounded-lg object-cover mt-5"
        />
        <div className=" flex lg:flex-row flex-col lg:justify-between justify-start lg:items-center my-8 gap-4">
          <div className=" flex justify-start  items-center gap-6">
            <img
              src={author_image}
              alt="Author Photo"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div>
              <p className="text-[1.25rem] font-bold ">{author_name}</p>
              <p className="text-[1rem] font-semibold text-[#11111199] ">
                {posted_date} (4 Days ago)
              </p>
            </div>
          </div>
          <div className=" flex lg:justify-center gap-2 ">
            <p className="text-[20px] font-medium text-[#11111199] ">
              {reading_time} min read
            </p>
            <img
              className="w-[24px] cursor-pointer"
              src={isBookmarked? '../../../images/bookmarked.svg' : imgSrc}
              alt="Bookmark Icon"
              onClick={() => {
                handleBookmark(blog);
              }}
            />
          </div>
        </div>
        <div className=" space-y-5">
          <h1 className="text-4xl font-bold max-w-[737px]">{title}</h1>
          {hash_tag.map((tag, idx) => (
            <span
              key={idx}
              className="text-[20px] font-medium text-[#11111199] space-x-3 "
            >
              {tag}{" "}
            </span>
          ))}
          <br />
          <button
            onClick={() => {
              handleMarkAsRead(reading_time, blog);
            }}
            className="text-[20px] font-medium text-[#6047EC] underline"
          >
            Mark as read
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Blog;
