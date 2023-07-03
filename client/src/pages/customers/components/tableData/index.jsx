import editIcon from "../../../../assets/svg/edit.svg";
import deleteIcon from "../../../../assets/svg/trash-can.svg";
import axios from "axios";

export default function TableData() {
  return (
    <tr>
      <td className="border-solid border-[2px] px-[10px] py-[6px]">1</td>
      <td className="border-solid border-[2px] px-[10px] py-[6px]">Fisayo</td>
      <td className="border-solid border-[2px] px-[10px] py-[6px]">
        Festus-Olaleye
      </td>
      <td className="border-solid border-[2px] px-[10px] py-[6px]">
        19.09.2004
      </td>
      <td className="border-solid border-[2px] px-[10px] py-[6px]">
        09128956416
      </td>
      <td className="border-solid border-[2px] px-[10px] py-[6px] lowercase">
        festusolaleyef@gmail.com
      </td>
      <td className="border-solid border-[2px] px-[10px] py-[6px]">
        0670749990
      </td>
      <td className="border-solid border-[2px] px-[10px] py-[6px]">
        <span className="flex justify-between">
          <img
            src={editIcon}
            alt="Edit Icon"
            className="w-[25px] cursor-pointer"
          />
          <img
            src={deleteIcon}
            alt="Delete Icon"
            className="w-[25px] cursor-pointer"
          />
        </span>
      </td>
    </tr>
  );
}
