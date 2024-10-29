import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { FaCartShopping } from "react-icons/fa6";
import { Pagination } from "swiper/modules";

const BookCard = ({ headLine, books }) => {
  return (
    <div className="px-4 my-16 lg:px-24">
      <h2 className="my-5 text-5xl font-bold text-center text-black">
        {headLine}
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
          1280: { slidesPerView: 5, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="w-full h-auto mySwiper"
      >
        {books.map((book) => (
          <SwiperSlide key={book._id} className="flex justify-center">
            <Link to="/">
              <div className="relative">
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="object-cover w-full rounded-md h-80"
                />
                <div className="absolute p-2 bg-blue-600 rounded top-3 right-3 hover:bg-black">
                  <FaCartShopping className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-2">
                <h3 className="text-lg font-semibold">{book.bookTitle}</h3>
                <p className="text-sm text-gray-500">{book.authorName}</p>
                <p className="mt-1 text-lg font-bold">$10.00</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookCard;
