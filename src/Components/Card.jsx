import React from 'react'

const Card = ({imgSrc, title, description, buttonText}) => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={imgSrc} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Project Ideas</h2>
          <p className="text-left">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn w-full border-[#005AA5] rounded-2xl border-2 text-[#005AA5]">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card