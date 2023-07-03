import TableData from "../tableData";
import filter from "../../../../assets/svg/filter.svg";

export default function Table({ className }) {
  return (
    <div className={className}>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border-solid border-[2px] px-[10px] py-[6px]">
              <span>#</span>
            </th>
            <th className="border-solid border-[2px] px-[10px] py-[6px]">
              <span className="flex items-center justify-between">
                First Name
                <img
                  src={filter}
                  alt="filter icon"
                  className="inline-block cursor-pointer"
                />
              </span>
            </th>
            <th className="border-solid border-[2px] px-[10px] py-[6px]">
              <span className="flex items-center justify-between">
                Last Name
                <img
                  src={filter}
                  alt="filter icon"
                  className="inline-block cursor-pointer"
                />
              </span>
            </th>
            <th className="border-solid border-[2px] px-[10px] py-[6px]">
              <span className="flex items-center justify-between">
                Date of Birth
                <img
                  src={filter}
                  alt="filter icon"
                  className="inline-block cursor-pointer"
                />
              </span>
            </th>
            <th className="border-solid border-[2px] px-[10px] py-[6px]">
              <span className="flex items-center justify-between">
                Phone Number
                <img
                  src={filter}
                  alt="filter icon"
                  className="inline-block cursor-pointer"
                />
              </span>
            </th>
            <th className="border-solid border-[2px] px-[10px] py-[6px]">
              <span className="flex items-center justify-between">Email</span>
            </th>
            <th className="border-solid border-[2px] px-[10px] py-[6px]">
              <span className="flex items-center justify-between">
                B A N
                <img
                  src={filter}
                  alt="filter icon"
                  className="inline-block cursor-pointer"
                />
              </span>
            </th>
            <th className="border-solid border-[2px] px-[10px] py-[6px]"></th>
          </tr>
        </thead>
        <tbody>
          <TableData />
        </tbody>
      </table>
    </div>
  );
}
