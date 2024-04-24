export default function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="bg-purple rounded-2xl mt-10 w-full h-10 p-2 flex items-center justify-center font-semibold text-blue-1"
    >
      {children}
    </button>
  );
}