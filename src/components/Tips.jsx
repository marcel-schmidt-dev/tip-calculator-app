/* eslint-disable react/prop-types */
import Input from "./Input";

export default function Tips({ title, setTipPercentage, tipPercentage }) {
  const tips = [5, 10, 15, 25, 50];

  return (
    <div className="my-8">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {title}
      </label>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
        {tips.map((tip) => (
          <button
            key={tip}
            className={`w-full text-2xl rounded-md py-2 ${
              tipPercentage === tip
                ? "bg-[#9FE8DF] text-[#00474B]"
                : "bg-[#00474B] text-white"
            }`}
            onClick={() => setTipPercentage(tip)}
          >
            {tip}%
          </button>
        ))}
        <Input placeholder="Custom" onChange={(e) => setTipPercentage(e)} />
      </div>
    </div>
  );
}
