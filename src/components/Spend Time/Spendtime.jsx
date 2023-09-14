import PropTypes from "prop-types";

const Spendtime = ({ totalReadTime }) => {
  return (
    <div className="bg-[#6047EC1A] px-12 py-5 rounded-xl text-center max-w-[400px] ">
      <h4 className="font-bold text-[1.25rem] text-[#6047EC]">
        Spent time on read: {totalReadTime} min
      </h4>
    </div>
  );
};

Spendtime.propTypes = {
  totalReadTime: PropTypes.number.isRequired,
};

export default Spendtime;
