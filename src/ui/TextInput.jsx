function TextInput({ value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      type="text"
      className="px-4 border-2 border-gray-200 w-full rounded-md h-10 text-gray-500 text-lg mt-2 mb-4"
    />
  );
}

export default TextInput;
