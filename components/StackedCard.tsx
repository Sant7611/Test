type StackedCardProps = {
  topCard: React.ReactNode;
  bottomCard: React.ReactNode;
};

const StackedCard = ({ topCard, bottomCard }: StackedCardProps) => {
  return (
    <div className="relative group">
      <div
        className="absolute z-0
        opacity-0 
        transition-all duration-800 ease-in-out
        group-hover:opacity-100 "
      >
        {bottomCard}
      </div>

      <div
        className="relative z-10
        transition-all duration-800 ease-in-out
        group-hover:-translate-x-[120%] group-hover:opacity-0 group-hover:pointer-events-none"
      >
        {topCard}
      </div>
    </div>
  );
};

export default StackedCard;
