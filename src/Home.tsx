import { useState } from "react";
import quincyLogo from "../src/assets/quincy.png";
import Button from "./Button";
import facebook from "../src/assets/fb.png";
import instagram from "../src/assets/ig.png";
import twitter from "../src/assets/twitter.png";
import tiktok from "../src/assets/tiktok.png";
import linkedin from "../src/assets/linkedin.png";
import gmail from "../src/assets/gmail.png";

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleButtonClick = (contentType: string) => {
    let content = "";
    let title = "";
    switch (contentType) {
      case "BIO":
        title = "BIOGRAPHY"
        content = "Quincy Tobenna Alagbu — also known as Toben Quincy and Sir Quincy — is a multi-award-winning writer, editor, ghostwriter, voice-over artist, and writing coach with a commanding presence in the world of storytelling. Renowned for his ability to craft compelling narratives and build unforgettable brands through words, Quincy has collaborated with international personalities and businesses, judged global literary contests, and led fast-growing writing communities that empower emerging voices. As a literary force with a passion for impact, Quincy has mentored numerous writers who have gone on to become successful authors. Whether ghostwriting riveting memoirs or crafting persuasive content, he brings precision, creativity, and heart to every project. He is also a six-foot-four librocubicularist who can often be found reading multiple books at once. When he is not reading, working his magic with words, or daydreaming up tales — mostly action-packed Afro-futuristic tales — he is either indulging his inner foodie or sketching things and pairing them with beautiful pieces of poetry. He is currently working on his first long-form novel, rooted in the Afro-fantasy genre.";
        break;
      case "BOOKS":
        title = "BOOKS"
        content = "Quincy's books include inspirational titles focused on growth, creativity, and leadership.";
        break;
      case "SERVICES":
        title = "SERVICES"
        content = "Quincy offers services such as writing mentorship, public speaking, and brand consultation.";
        break;
    }
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <h1 className="text-center mt-10 text-4xl font-bold">QUINCY TOBENNA ALAGBU</h1>
      <div className="flex flex-col justify-center items-center mt-14 relative">
        <img src={quincyLogo} alt="quincy logo" className="rounded-full w-72 h-72 relative z-10" />
        <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[650px] border border-violet-100 absolute top-[12rem] z-0 rounded-lg pt-[9rem] pb-5 flex flex-col items-center space-y-5">
          <Button text="BIO" onClick={() => handleButtonClick("BIO")} />
          <Button text="BOOKS" onClick={() => handleButtonClick("BOOKS")} />
          <Button text="SERVICES" onClick={() => handleButtonClick("SERVICES")} />

          <div className="flex flex-row gap-5 mt-5">
            <a href="https://www.instagram.com/thetobenquincy" target="_blank"><img src={instagram} alt="ig" className="w-10 h-10" /></a>
            <a href="http://x.com/thetobenquincy" target="_blank"><img src={twitter} alt="x" className="w-10 h-10" /></a>
            <a href="http://www.tiktok.com/@thetobenquincy" target="_blank"><img src={tiktok} alt="tiktok" className="w-10 h-10" /></a>
            <a href="https://www.facebook.com/share/19AsC5aGqR/" target="_blank"><img src={facebook} alt="fb" className="w-10 h-10" /></a>
            <a href="https://www.linkedin.com/in/quincy-tobenna-alagbu-635a73356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img src={linkedin} alt="linkedin" className="w-10 h-10" /></a>
            <a href="mailto:connectwithtoben@gmail.com" target="_blank"><img src={gmail} alt="gmail" className="w-10 h-10" /></a>
          </div>
        </div>
      </div>


      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center space-y-4 shadow-xl">
            <h2 className="text-2xl font-semibold text-black">{modalTitle}</h2>
            <p className="text-gray-700">{modalContent}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-black text-white px-6 py-2 rounded-full cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
