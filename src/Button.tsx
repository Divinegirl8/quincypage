type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button:React.FC<ButtonProps> = ({text,onClick}) =>{
    return(
      <>
      <button onClick={onClick} className={`border-[0.25px] rounded-[8px] text-[14px] border-[#62646C] w-[80%]  h-11 text-center py-[9px] cursor-pointer`}>
                   {text}
          
      </button>
  
      </>
    )
  }
  
  export default Button;