const Separator = ({content}) => {
return (
    <div className="inline-block sep w-full h-1 my-20 align-middle">
    <div className="sep -mt-5 mx-auto w-36 h-12 flex  justify-around">
      <p className="my-auto text-white font-bold">{content}</p>
    </div>
  </div>
);
}
export default Separator;