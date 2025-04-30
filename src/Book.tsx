import React from "react";
import omeihukwu from "../src/assets/books/OMEIHEUKWU.png";
import literary from "../src/assets/books/THE LITERARY SEDUCER.jpg";
import charge from "../src/assets/books/TAKE CHARGE RIGHT NOW!.png";
import craft from "../src/assets/books/HOW TO CRAFT KILLER OFFERS_20250418_125248_0002.png";
import charging from "../src/assets/books/THE ART OF CHARGING MORE_20250418_125247_0000.png";
import box from '../src/assets/books/BOXED FOR IMPACT_20250418_125248_0001.png';
import pace from '../src/assets/books/HOW TO PACE YOUR STORIES LIKE A PRO_20250418_125059_0000.png'

const descriptionTxt1 = "Click to get Ebook";
const descriptionTxt2 = "Click to get HardCopy";

const books = [
  {
    title: "OMEIHEUKWU",img: omeihukwu,descriptionE: descriptionTxt1,descriptionH: descriptionTxt2,linkE : "https://selar.com/w96nx9", linkH : "https://www.amazon.com/OMEIHEUKWU-One-Does-Extraordinary-Things/dp/B0CLLHKBRH?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.3ysb2vwMitpM1d-3XvjIewAewSbwW8GBhAU1XC4wDoU.ZcU0EZsrtUu6Yyu9i4fMUiM3dOtrPgrj6W3MLCSw3zw&dib_tag=AUTHOR"},
  { title: "THE LITERARY SEDUCER", img: literary ,   descriptionE: descriptionTxt1, descriptionH: descriptionTxt2,linkE : " https://selar.com/eth2", linkH : "https://www.amazon.com/gp/aw/d/B09SNMYHQ6/ref=tmm_pap_swatch_0"},
  { title: "TAKE CHARGE RIGHT NOW!", img: charge,descriptionH: descriptionTxt2, linkH: "https://www.amazon.com/TAKE-CHARGE-RIGHT-NOW-self-confidence/dp/B0B5KQVJ5Y/ref=mp_s_a_1_1?crid=2Y4XFOU10ASHT&dib=eyJ2IjoiMSJ9.6ptFieUt6uOKHSO9xk_YdA.P_A2nBTo4aoy9LSAQCtlIjA65HqOQNK_TnnDjG6fJkE&dib_tag=se&keywords=Take+Charge+Right+Now+by+Quincy+James&qid=1744548419&sprefix=take+charge+right+now+b,aps,833&sr=8-1" },
  { title: "HOW TO CRAFT KILLER OFFERS THAT CONVERT", img: craft, descriptionE: descriptionTxt1, linkE : "https://selar.com/016050"},
  { title: "THE ART OF CHARGING MORE", img: charging , descriptionE: descriptionTxt1,linkE : "https://selar.com/e6d709"},
  { title: "BOXED FOR IMPACT", img: box,descriptionE: descriptionTxt1, linkE: " https://selar.com/1514xy"},
  { title: "HOW TO PACE YOUR STORIES LIKE A PRO", img: pace,descriptionE: descriptionTxt1, linkE: "https://selar.com/6455ys"},
];

const Book: React.FC = () => {
  return (
    <div className="w-full px-4 py-6 min-h-screen bg-white">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
        {books.map((book, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-black rounded-xl p-6 w-full max-w-[280px] shadow-md bg-white"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-[280px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black text-center mb-2">
              {book.title}
            </h3>

            {book.descriptionE && (
            <button
                className="mt-1 px-3 py-1 bg-black text-white text-sm font-medium rounded shadow-sm transition cursor-pointer disabled:opacity-50"
                onClick={() => {
                if (book.linkE) window.open(book.linkE, "_blank");
                }}
            >
                {book.descriptionE}
            </button>
            )}

            {book.descriptionH && (
              <button className="mt-2 px-3 py-1 bg-black  text-white text-sm font-medium rounded shadow-sm transition cursor-pointer"
              onClick={() => {
                if(book.linkH) window.open(book.linkH, "_blank")
              }}
              >
                {book.descriptionH}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
