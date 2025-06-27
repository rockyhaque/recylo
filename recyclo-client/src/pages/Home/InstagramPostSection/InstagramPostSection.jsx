const InstagramPostSection = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "https://i.ibb.co/9rCDmz1/pastic.jpg",
      alt: "Recycling waste materials",
      link: "https://instagram.com",
    },
    {
      id: 2,
      image: "https://i.ibb.co/NKF20Fb/images-1.jpg",
      alt: "Instagram follow us",
      link: "https://instagram.com",
      hasOverlay: true,
    },
    {
      id: 3,
      image: "https://i.ibb.co/5Wb5F70/Image-1.png",
      alt: "Colorful recycled materials",
      link: "https://instagram.com",
    },
    {
      id: 4,
      image: "https://i.ibb.co/h1TpYbx/photo-1595278069441-2cf29f8005a4.jpg",
      alt: "Person working with recycling",
      link: "https://instagram.com",
    },
    {
      id: 5,
      image: "https://i.ibb.co/7vsdnmG/images-3.jpg",
      alt: "Green recycling work",
      link: "https://instagram.com",
    },
    {
      id: 6,
      image: "https://i.ibb.co/ftb5ZGt/Cables-or-Wires.png",
      alt: "Blue recycling materials",
      link: "https://instagram.com",
    },
  ];

  return (
    <section className="bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Instagram Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Follow us on Instagram
          </h2>

          {/* Instagram Posts Grid */}
          <div className="flex justify-center gap-4 flex-wrap">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  className="w-full h-full object-cover"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.718.334 4.015.63a5.82 5.82 0 0 0-2.105 1.372A5.82 5.82 0 0 0 .538 4.007c-.295.703-.503 1.511-.558 2.741C-.016 7.989 0 8.396 0 12.017c0 3.624.016 4.031.072 5.264.055 1.23.263 2.038.558 2.741.306.794.717 1.468 1.372 2.105a5.82 5.82 0 0 0 2.105 1.372c.703.295 1.511.503 2.741.558 1.233.056 1.64.072 5.264.072 3.624 0 4.031-.016 5.264-.072 1.23-.055 2.038-.263 2.741-.558a5.82 5.82 0 0 0 2.105-1.372 5.82 5.82 0 0 0 1.372-2.105c.295-.703.503-1.511.558-2.741.056-1.233.072-1.64.072-5.264 0-3.624-.016-4.031-.072-5.264-.055-1.23-.263-2.038-.558-2.741a5.82 5.82 0 0 0-1.372-2.105A5.82 5.82 0 0 0 19.988.63c-.703-.295-1.511-.503-2.741-.558C16.014.016 15.607 0 12.017 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramPostSection;
