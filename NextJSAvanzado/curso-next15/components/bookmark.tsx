import { HeartIcon } from "@heroicons/react/24/solid"
import type { BookmarkType } from "../app/bookmarks/schema"

export function Bookmark(bookmark: BookmarkType) {
  return (
    <div className="flex items-center">
      <button className="hover:scale-110 transition-transform">
        <HeartIcon
          className={`w-7 h-7 mr-3 ${bookmark.fav ? "text-red-500" : "text-slate-300"}`}
        />
      </button>
      <a
        href={bookmark.url}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:underline"
      >
        {bookmark.title} - {bookmark.url}
      </a>
    </div>
  )
}
