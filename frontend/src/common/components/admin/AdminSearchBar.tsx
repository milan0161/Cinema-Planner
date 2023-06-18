import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminSelect from './AdminSelect';

const AdminSearchBar = () => {
  return (
    <div className="border border-yellow-500 flex flex-row h-8 w-5/6 mx-auto mt-4 bg-white text-black">
      <AdminSelect />
      <input
        type="search"
        className="w-full placeholder:italic border border-slate-400 px-2 rounded outline-none"
        placeholder="Search for movie"
      />
      <div className="flex items-center ml-2">
        <button className="">
          <FontAwesomeIcon className=" mt-1 px-2 py-1" icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
};

export default AdminSearchBar;
