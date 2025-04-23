
const Button:React.FC<{text: string}> = ({text}) =>{
    return(
      <>
      <div className={`border-[0.25px] rounded-[8px] text-[14px] border-[#62646C] w-[80%]  h-11 text-center py-[9px] cursor-pointer`}>
                   {text}
          
      </div>
  
      </>
    )
  }
  
  export default Button;