// pages/index.tsx
import Image from "next/image";
import { books } from "./component/book";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="border rounded-lg shadow-md p-6 bg-white hover:shadow-xl transition-all"
        >
          <div className="relative w-full h-56 mb-4">
            <Image
              src={book.image} // Correctly reference the image property
              alt={book.title}
              layout="fill" // Ensures the image fills the container
              objectFit="cover" // Maintains aspect ratio and fills the area
              className="rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
          <p className="text-gray-600 mt-2">{book.description}</p>
        </div>
      ))}
    </div>
  );
}