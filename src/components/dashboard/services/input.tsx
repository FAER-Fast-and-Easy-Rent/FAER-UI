export const Input = ({
  title,
  white = false,
  type,
  name,
  value,
  handleChange,
}) => (
  <dl
    className={`${
      white ? "bg-white" : "bg-gray-50"
    } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
  >
    <dt className=" font-medium text-gray-500">{title}</dt>
    <dd className="mt-1  text-gray-900 sm:col-span-2 sm:mt-0">
      <input
        className={`w-full border px-3 py-2 focus:outline-none ${
          type === "checkbox" ? "focus:ring-0" : "focus:shadow-sm focus:ring-1"
        }  rounded-lg focus:border-indigo-500 focus:ring-indigo-500`}
        type={type}
        name={name}
        min={0}
        value={value}
        onChange={handleChange}
        required={type != "checkbox"}
        checked={type == "checkbox" ? value : null}
      />
    </dd>
  </dl>
);
