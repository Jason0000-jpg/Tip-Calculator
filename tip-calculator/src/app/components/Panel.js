
export default function Panel({ children }) {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-gray-600 shadow-lg">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
