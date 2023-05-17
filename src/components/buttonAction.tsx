import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ButtonAdd = ({
  isFeacture,
  onClick,
}: {
  isFeacture?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="flex items-center justify-start hover:opacity-60"
      onClick={onClick}
    >
      {isFeacture ? <StarIcon /> : <StarBorderIcon />}
    </button>
  );
};

export default ButtonAdd;
