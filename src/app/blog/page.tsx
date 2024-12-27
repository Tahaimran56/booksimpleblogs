import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import { books } from "../component/book";
import Comments from "../component/comments";

export default function Blogs() {
  return (
    <div className="p-4">
      <h1 className="text-center bg-red-200 hover:bg-red-500 font-extrabold text-lg sm:text-xl lg:text-2xl py-2">
        Top 5 Books for Self-Development
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {books.map((book) => (
          <Link href={`/blog/${book.slug}`} key={book.id}>
            <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-xl transition-all">
              <div className="relative w-full h-64 sm:h-56 lg:h-72 mb-4">
                <Image
                  src={book.image}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {book.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <Comments />
      </div>
    </div>
  );
}
