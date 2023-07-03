import searchIcon from "../../assets/svg/search.svg";
import Table from "./components/table";

export default function Customer() {
  return (
    <section className="px-[40px] py-[40px] w-full">
      <div>
        <h1 className="text-3xl font-semibold mb-8">Customers</h1>
        <section className="bg-white w-auto h-auto px-[30px] py-[30px] overflow-auto">
          <div className="flex gap-7 items-center mb-8">
            <button className="bg-blue-900 text-slate-50 px-[15px] py-[10px] rounded-lg">
              Create Customer
            </button>
            <div className="flex items-center border-solid border-gray-200 border-[3px] rounded-lg pr-[5px]">
              <input
                type="text"
                name="search"
                id="search"
                className="w-full outline-none border-none px-[10px] py-[5px]"
              />
              <img
                src={searchIcon}
                alt="Search"
                className="w-[20px] cursor-pointer"
              />
            </div>
          </div>
          <div>
            <Table />
          </div>
        </section>
      </div>
    </section>
  );
}
