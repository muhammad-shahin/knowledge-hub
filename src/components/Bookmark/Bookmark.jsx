import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white p-5  text-left max-w-[600px] rounded-xl ">
      <h5 className="font-medium text-[1.25rem] text-black">
        {title}
      </h5>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
