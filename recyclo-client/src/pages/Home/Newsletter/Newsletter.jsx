const Newsletter = () => {
  return (
    <div>
      {/* Newsletter Subscription Section */}
      <div className="bg-gray-100 rounded-2xl px-8 py-6">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap gap-4">
          {/* Logo and Text */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Recyclo Logo */}
              <div className="flex items-center h-full">
                <div className="btn btn-ghost flex items-center ">
                  <img
                    className="w-24"
                    src="https://i.ibb.co/tJJ4KM1/Logo-light.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="hidden sm:block">
              <h3 className="text-lg font-semibold text-gray-900">
                Subscribe our Newsletter
              </h3>
              <p className="text-sm text-gray-600">
                Never miss a update get notified about latest news every month
              </p>
            </div>
          </div>

          {/* Mobile text (shown on small screens) */}
          <div className="sm:hidden w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Subscribe our Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Never miss a update get notified about latest news every month
            </p>
          </div>

          {/* Email Input and Subscribe Button */}
          <form className="flex gap-3 flex-1 max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-customBlack text-customWhite rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
