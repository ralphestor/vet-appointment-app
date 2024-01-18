import AppIconSearch from "../../public/icons/app/icon-search";


const SearchBar = () => {
  return (
    <form className="w-full">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative w-full">
        <input
          type="search"
          id="default-search"
          className="block w-full p-[12px] ps-[20px] outline-none rounded-[12px] bg-gray-50 bg-[#D8D3CC]"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute top-[50%] right-0 translate-y-[-50%] translate-x-[-20px] rounded-[2px] hover:stroke-customOrange transition-all duration-300 ease-in-out stroke-[#49494B]"
        >
          <div className="">
            <AppIconSearch/>
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
