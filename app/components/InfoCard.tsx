const InfoCard = () => {
    return (
      <div className="bg-white bg-opacity-80 rounded-lg p-6 w-96 h-1/2 relative">
        <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg" style={{ height: 200 }}></div>
        <img
          src="/inaba.png"
          alt="Himeko Inaba"
          className="h-44 mx-auto relative z-10 select-none"
        />
        <h2 className="text-2xl text-black font-semibold mb-2 mt-4 relative">Caption Here</h2>
        <p className="text-gray-600 relative">
          Description text goes here. You can provide additional information about
          this card.
        </p>
      </div>
    );
};
  
export default InfoCard;

  
  
  
  