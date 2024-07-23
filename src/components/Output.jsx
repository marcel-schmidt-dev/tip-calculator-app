/* eslint-disable react/prop-types */
export default function Output({ title, amount }) {
  return (
    <div className="md:mb-12 mb-5 flex justify-between">
      <div>
        <span className="text-white md:text-base text-lg">{title}</span>
        <br />
        <span className="text-[#7F9D9F] md:text-base text-xs">/ person</span>
      </div>
      <div className="text-[#26C2AE] md:text-5xl text-3xl">${amount}</div>
    </div>
  );
}
