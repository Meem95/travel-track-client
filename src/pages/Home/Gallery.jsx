const Gallery = () => {
  return (
    <div>
      <section className="py-6  max-w-7xl mx-auto ">
      <div className="text-center text-4xl font-bold my-10">
        <h1> Travel Gallery</h1>
      </div>
        <div className=" grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/dJBPPNd/Keling-King-Beach-Nusa-Penida-Bali-Indonesia.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-80 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/QMCBCNZ/pangthumai-waterfall.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/42tBdc7/top-ten-tourist-places-to-visit-in-bangladesh-1.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/YtmFXMF/national-memorial-jatio-sriti-soudho-768x1024-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/DYDnXZw/bali-pura-ulun-danu.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/b3XDd0D/1-0-F4g9-IJ6d9-D9dh-O-ZXMVJQ.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/tbh9jsN/Vietnam-cover-9th-Mar.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/ZGXgwLx/best-places-to-visit-in-cambodia-angkor-wat-2023-02-21-427.webp"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://i.ibb.co/6s178J7/malaysia-111avril.jpg"
          />
          <img
            src="https://i.ibb.co/wMcYvZP/8994658f-13ad-4106-bde4-856450359f47.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-80 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
