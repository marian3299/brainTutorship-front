export default function Button({ children }) {
  return (
    <button className="bg-grey w-full text-white px-3 py-2 rounded-2xl">
      {children}
    </button>
  );
}