export default function Button({ children, onClick }) {
  return (
    <button className="bg-grey w-full text-white px-3 py-2 rounded-2xl" onClick={onClick}>
      {children}
    </button>
  );
}