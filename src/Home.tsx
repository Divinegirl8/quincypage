import quincyLogo from "../src/assets/quincy.png";
import Button from "./Button";
import facebook from "../src/assets/fb.png"
import instagram from "../src/assets/ig.png"
import twitter from "../src/assets/twitter.png"
import tiktok from "../src/assets/tiktok.png"
import linkedin from "../src/assets/linkedin.png"
import gmail from "../src/assets/gmail.png"

const Home: React.FC = () => {
    return (
        <>
         <h1 className="text-center mt-10 text-4xl font-bold">QUINCY TOBENNA ALAGBU</h1>
        <div className="flex flex-col justify-center items-center mt-14 relative">
           
            <img
                src={quincyLogo}
                alt="quincy logo"
                className="rounded-full w-72 h-72 relative z-10"
            />
            <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[650px] border border-violet-100 absolute top-[12rem] z-0 rounded-lg pt-[9rem] pb-5 flex flex-col items-center space-y-5">
                <Button text={"BIO"} />
                <Button text={"BOOKS"} />
                <Button text={"SERVICES"} />

                <div className="flex flex-row gap-5">
                <a href=" https://www.instagram.com/thetobenquincy" target="_blank"><img src={instagram} alt="ig" className="w-10 h-10"/></a>
                <a href=" http://x.com/thetobenquincy" target="_blank"><img src={twitter} alt="x" className="w-10 h-10"/></a>
                <a href="http://www.tiktok.com/@thetobenquincy" target="_blank"><img src={tiktok} alt="tiktok" className="w-10 h-10"/></a>
                <a href="https://www.facebook.com/share/19AsC5aGqR/" target="_blank"><img src={facebook} alt="fb" className="w-10 h-10"/></a>
                <a href="https://www.linkedin.com/in/quincy-tobenna-alagbu-635a73356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img src={linkedin} alt="linkedin" className="w-10 h-10"/></a>
                <a href="mailto:connectwithtoben@gmail.com" target="_blank"><img src={gmail} alt="gmail" className="w-10 h-10"/></a>
               </div>
            </div>

           
        </div>
        </>
    );
};

export default Home;
