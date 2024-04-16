import { FaCaretDown } from "react-icons/fa";

const Item = ({ question, answer, index, selected, setSelected }) => {
  return (
    <div className="text-citrus-beige border-x-0 border-t-0 border-b-2 last:border-0">
      <div
        className=" text-citrus-beige w-full"
        onClick={() => setSelected(index === selected ? null : index)}
      >
        <div className="flex justify-between items-center w-full font-black mt-3 cursor-pointer py-2">
          {question}
          <FaCaretDown
            className={`${
              selected === index && "rotate-180"
            } duration-200 ml-2 text-2xl`}
          />
        </div>
      </div>
      <div
        className={`border-none overflow-hidden transition-[max-height] ${
          selected === index ? "max-h-500" : "max-h-0"
        } duration-300 `}
      >
        <div className={`brder-none py-4`}>{answer}</div>
      </div>
    </div>
  );
};

export default Item;
