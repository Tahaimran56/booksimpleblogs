"use client";

import { useParams } from "next/navigation"; // Use useParams for dynamic params
import { books } from "@/app/component/book"; // Adjust path as needed
import Image from "next/image";

export default function BookDetail() {
  const params = useParams();

  // Fallback if params are not ready
  if (!params) return <p>Loading...</p>;

  const { slug } = params;

  console.log("Slug from URL:", slug); // Debug log
  console.log("Books Array:", books); // Debug books array

  // Find the book matching the slug
  const book = books.find((book) => book.slug === slug);

  if (!book) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Book Not Found</h1>
        <p>We could not find the book you are looking for.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <div className="relative w-32 h-32 mb-6 justify-center"> {/* Adjusted width and height */}
        <Image
          src={book.image}
          alt={book.title}
          fill
          style={{ objectFit: "cover" }} // Ensure proper scaling
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-700 text-lg">{book.content}</p>
    </div>
  );
}
