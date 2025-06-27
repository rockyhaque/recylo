import { useEffect, useState, useRef } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./Testimonials.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(4);
  const autoPlayRef = useRef(null);
  const progressRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    fetch("https://recyclo-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // Auto-play functionality with progress
  useEffect(() => {
    if (isAutoPlaying && reviews.length > 0) {
      const interval = 100; // Update every 100ms for smooth progress
      const totalTime = 4000; // 4 seconds total
      let elapsed = 0;

      autoPlayRef.current = setInterval(() => {
        elapsed += interval;
        const currentProgress = elapsed / totalTime;
        const currentTimeLeft = Math.ceil((totalTime - elapsed) / 1000);

        setProgress(currentProgress);
        setTimeLeft(currentTimeLeft);

        if (elapsed >= totalTime) {
          setCurrentSlide(
            (prev) =>
              (prev + 1) % Math.ceil(reviews.length / getSlidesPerView())
          );
          elapsed = 0;
          setProgress(0);
          setTimeLeft(4);
        }
      }, interval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, reviews.length, currentSlide]);

  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / slidesPerView);

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setProgress(0);
    setTimeLeft(4);
    setTimeout(() => setIsAutoPlaying(true), 1000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoPlay();
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetAutoPlay();
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetAutoPlay();
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      goPrev();
    }
  };

  if (reviews.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-customLightGreen">
      <div className="py-16 bg-red-500 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header with title and navigation */}
          <div className="flex justify-between items-center mb-12">
            <div className="">
              <h3 className="text-3xl font-semibold py-4">
                Client Testimonial
              </h3>
              <div className="flex gap-1 items-center">
                <h1 className="border-2 text-neutral-400 w-3"></h1>
                <h1 className="border-2 bg-customBlack w-8"></h1>
                <h1 className="border-2 text-neutral-400 w-3"></h1>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-500 border border-gray-200 flex items-center justify-center  transition-all duration-200 shadow-xl hover:shadow-2xl"
                aria-label="Previous testimonials"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-800 text-white flex items-center justify-center  transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Next testimonials"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonials Container */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div
                    className={`grid gap-6 ${
                      slidesPerView === 3
                        ? "grid-cols-3"
                        : slidesPerView === 2
                        ? "grid-cols-2"
                        : "grid-cols-1"
                    }`}
                  >
                    {reviews
                      .slice(
                        slideIndex * slidesPerView,
                        (slideIndex + 1) * slidesPerView
                      )
                      .map((review) => (
                        <div
                          key={review._id}
                          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-shadow duration-300"
                        >
                          {/* Quote icon */}
                          <div className="mb-6">
                            <svg
                              className="w-8 h-8 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                          </div>

                          {/* Review text */}
                          <div className="flex-grow mb-6">
                            <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                              {review.details}
                            </p>
                          </div>

                          {/* User info and rating */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                                <img
                                  src={
                                    review?.imgURL ||
                                    "/placeholder.svg?height=48&width=48"
                                  }
                                  alt={review.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.src =
                                      "/placeholder.svg?height=48&width=48";
                                  }}
                                />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 text-sm">
                                  {review.name}
                                </h4>
                                <p className="text-gray-500 text-xs">
                                  {review?.role || "Customer"}
                                </p>
                              </div>
                            </div>

                            <div className="flex-shrink-0">
                              <Rating
                                style={{ maxWidth: 80 }}
                                value={review.rating || 5}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-6 h-2 bg-gray-900 rounded-full"
                    : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Progress Indicator */}
          <div className="autoplay-progress">
            <svg viewBox="0 0 48 48" ref={progressRef}>
              <circle
                cx="24"
                cy="24"
                r="20"
                style={{
                  "--progress": progress,
                }}
              />
            </svg>
            <span>{timeLeft}s</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
