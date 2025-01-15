export default function Loading() {
  return (
    <div className="flex flex-col">
      {/* h1 */}
      <div className="h-8 w-60 rounded bg-slate-200 animate-pulse mb-4" />
      {/* username badge */}
      <div className="h-28 w-72 rounded bg-slate-200 animate-pulse mb-4" />
      <div className="h-5 w-96 rounded bg-slate-200 animate-pulse mb-2" />
      {/* h2 */}
      <div className="h-8 w-56 rounded bg-slate-200 animate-pulse mt-14" />
      {/* List */}
      <ul className="mt-8">
        {[1, 2, 3, 4, 5].map((id) => (
          <li className="border-b-2 py-4 px-6 my-2" key={id}>
            <div className="h-7 w-full rounded bg-slate-200 animate-pulse" />
          </li>
        ))}
      </ul>
    </div>
  )
}
