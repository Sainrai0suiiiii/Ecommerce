import { useContext } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  const handleClose = () => {
    setSearch('');
    setShowSearch(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  if (!showSearch) return null;

  return (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className='flex-1 outline-none bg-inherit text-sm'
          type='text'
          placeholder='Search products'
          aria-label='Search products'
        />
        {search ? (
          <button
            type='button'
            onClick={() => setSearch('')}
            className='ml-2 text-gray-500 hover:text-gray-700'
            aria-label='Clear search'
          >
            <img className='w-4' src={assets.close} alt='' />
          </button>
        ) : (
          <img className='w-4 ml-2' src={assets.search} alt='' />
        )}
      </div>
      <button type='button' onClick={handleClose} className='inline-flex items-center justify-center w-3 cursor-pointer' aria-label='Close search'>
        <img className='w-3' src={assets.close} alt='' />
      </button>
    </div>
  )
}

export default SearchBar