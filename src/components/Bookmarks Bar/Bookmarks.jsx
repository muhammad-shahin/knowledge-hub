import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import Spendtime from "../Spend Time/Spendtime";
const Bookmarks = ({ bookmarks, totalReadTime }) => {
  // const {title} = bookmark;
  return (
    <div className="space-y-10">
      {/* spent time section */}
      <Spendtime totalReadTime={totalReadTime}></Spendtime>
      {/* Bookmarked blog section */}
      <div className="bg-[#1111110D] p-8 rounded-xl text-center max-w-[400px] space-y-4 ">
        <h4 className="font-bold text-[1.25rem] text-black">
          Bookmarked Blogs: {bookmarks.length}
        </h4>

        {/* bookmarked blog 1 */}
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  totalReadTime: PropTypes.number.isRequired,
};

export default Bookmarks;
