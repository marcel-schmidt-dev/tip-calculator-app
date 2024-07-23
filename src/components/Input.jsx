// eslint-disable-next-line react/prop-types
export default function Input({ title, image, placeholder, onChange, value }) {
  return (
    <div>
      {title && (
        <label className="mb-2 block" htmlFor={title}>
          {title}
        </label>
      )}
      <div className="relative">
        <input
          className={`bg-[#F3F9FA] w-full rounded-md text-2xl p-2 text-end border-2 border-solid focus-visible:border-[#26C2AE] focus:outline-transparent caret-[#26C2AE] ${
            value === "0" ? "border-[#E17052]" : "border-transparent"
          }`}
          type="number"
          name={title}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value && value}
        />
        {image && (
          <img
            className="absolute left-5 top-1/2 transform -translate-y-1/2"
            src={image}
            alt={image}
          />
        )}
      </div>
    </div>
  );
}
