import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ close, detail, onClose }) => {
  return (
    <div>
      {close && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 md:flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className={`product_detail ${close ? "block" : "hidden"}`}>
            <div className="container bg-white p-6 rounded-lg shadow relative">
              <button
                className="closeBtn"
                onClick={onClose}
              >
                <AiOutlineClose />
              </button>
              <div className="productbox md:flex justify-between w-full h-96">
                <div className="img-box p-6 max-w-xs h-350 bg-gray-300 flex items-center">
                  <img
                    src={detail[0].Img}
                    alt={detail[0].Title}
                    className="w-full h-full mx-auto object-cover"
                  />
                </div>
                <div className="detail ml-8 max-w-lg">
                  <h4 className="text-uppercase text-sm font-light text-gray-600">
                    {detail[0].Cat}
                  </h4>
                  <h2 className="mt-4 text-2xl font-bold text-black capitalize">
                    {detail[0].Title}
                  </h2>
                  <p className="mt-2 text-gray-700">
                    <p>
                      A Screen Everyone Will Love: Whether your family is
                      streaming or video chatting with friends tablet A8...{" "}
                    </p>
                  </p>
                  <h3 className="mt-5 text-2xl font-extrabold text-black">
                    ${detail[0].Price}
                  </h3>
                  <button
                    className="mt-8 py-4 px-16 text-white bg-[#082f49] hover:bg-blue-600 font-medium rounded-lg text-sm transition-colors duration-200 ease-in-out"
                    onClick={() => {
                      alert(`Added ${detail[0].Title} to cart`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
