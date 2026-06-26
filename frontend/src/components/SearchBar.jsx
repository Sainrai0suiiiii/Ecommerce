import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, products } = useContext(ShopContext);
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    if (!search.trim()) return [];
    return products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).slice(0, 4);
  }, [products, search]);

  const handleClose = () => {
    setSearch('');
    setShowSearch(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }

    if (e.key === 'Enter' && suggestions[0]) {
      e.preventDefault();
      setSearch('');
      setShowSearch(false);
      navigate(`/product/${suggestions[0]._id}`);
    }
  };

  const handleSelect = (productId) => {
    setSearch('');
    setShowSearch(false);
    navigate(`/product/${productId}`);
  };

  if (!showSearch) return null;

  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="mx-3 my-5 inline-flex w-3/4 items-center justify-center rounded-full border border-gray-400 px-5 py-2 sm:w-1/2">
        <input
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-inherit text-sm outline-none"
          type="text"
          placeholder="Search products"
          aria-label="Search products"
        />
        {search ? (
          <button
            type="button"
            onClick={() => setSearch('')}
            className="ml-2 text-gray-500 hover:text-gray-700"
            aria-label="Clear search"
          >
            <img className="w-4" src={assets.close} alt="" />
          </button>
        ) : (
          <img className="ml-2 w-4" src={assets.search} alt="" />
        )}
      </div>

      <button type="button" onClick={handleClose} className="inline-flex w-3 cursor-pointer items-center justify-center" aria-label="Close search">
        <img className="w-3" src={assets.close} alt="" />
      </button>

      {search.trim() && (
        <div className="mx-auto mb-5 w-3/4 rounded-2xl border border-gray-200 bg-white p-3 text-left shadow-sm sm:w-1/2">
          {suggestions.length > 0 ? (
            suggestions.map((item) => (
              <button key={item._id} type="button" onClick={() => handleSelect(item._id)} className="block w-full rounded-lg px-2 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                {item.name}
              </button>
            ))
          ) : (
            <p className="px-2 py-2 text-sm text-gray-500">No matches yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;