import React from 'react'

const Card = ({ imgSrc, title, description, buttonText, formInput }) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        {imgSrc && (
          <figure>
            <img src={imgSrc} alt={title} />
          </figure>
        )}
        <div className="card-body">
          {formInput && (
            <div className="flex flex-col ">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="John Doe"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="email@gmail.com"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Message..."
                  rows={4}
                />
              </div>

              <button className="btn bg-[#005AA5] text-white w-full rounded-xl hover:text-[#131133] hover:bg-[#7fc8f0] ">
                Send Message
              </button>
            </div>
          )}

          <h2 className="card-title">{title}</h2>
          <p className="text-left">{description}</p>
          <div className="card-actions justify-end">
            {buttonText && (
              <button className="btn w-full border-[#005AA5] rounded-2xl border-2 text-[#005AA5]  hover:text-[#131133] hover:bg-[#7fc8f0] hover:border-0">
                {buttonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card