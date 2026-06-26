import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filerProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const normalizeValue = (value) => value?.toString().trim().toLowerCase();

  const matchesSearch = (item) => {
    if (!search.trim()) return true;

    const query = normalizeValue(search);
    const haystack = [item.name, item.description, item.category, item.subCategory]
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  };

  const toggleCategory = (e) => {
    const value = normalizeValue(e.target.value);
    setCategory((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  const toggleSubCategory = (e) => {
    const value = normalizeValue(e.target.value);
    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setSortType('relevant');
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (search.trim()) {
      productsCopy = productsCopy.filter(matchesSearch);
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(normalizeValue(item.category)));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(normalizeValue(item.subCategory)));
    }

    return productsCopy;
  };

  const sortAndSetProducts = (baseProducts) => {
    const fpCopy = baseProducts.slice();
    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      case 'relevant':
      default:
        break;
    }
    setFilterProducts(fpCopy);
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    const filtered = applyFilter();
    sortAndSetProducts(filtered);
  }, [category, subCategory, sortType, search, products]);

  const activeFilters = [...category, ...subCategory, ...(search.trim() ? ['search'] : [])];

  return (
    <div className="flex flex-col gap-1 border-t pt-10 sm:flex-row sm:gap-10">
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 flex cursor-pointer items-center gap-2 text-xl">
          FILTERS
        </p>
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown} alt="" />

        <div className={`mt-6 border border-gray-300 py-3 pl-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="men" checked={category.includes('men')} onChange={toggleCategory} />
              Men
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="women" checked={category.includes('women')} onChange={toggleCategory} />
              Women
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="kids" checked={category.includes('kids')} onChange={toggleCategory} />
              Kids
            </label>
          </div>
        </div>

        <div className={`mt-5 border border-gray-300 py-3 pl-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="topwear" checked={subCategory.includes('topwear')} onChange={toggleSubCategory} />
              Topwear
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="bottomwear" checked={subCategory.includes('bottomwear')} onChange={toggleSubCategory} />
              Bottomwear
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="full outfit" checked={subCategory.includes('full outfit')} onChange={toggleSubCategory} />
              Full Outfit
            </label>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-4 flex flex-col gap-3 text-base sm:flex-row sm:items-center sm:justify-between sm:text-2xl">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <div className="flex items-center gap-3">
            <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 px-2 text-sm">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-800">{filerProducts.length}</span> products
          </p>
          {(category.length > 0 || subCategory.length > 0 || search.trim()) && (
            <button onClick={clearFilters} className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline">
              Clear filters
            </button>
          )}
        </div>

        {activeFilters.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {activeFilters.map((item) => (
              <span key={item} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                {item}
              </span>
            ))}
          </div>
        )}

        {filerProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
            {filerProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center text-gray-500">No products match your search and filters.</div>
        )}
      </div>
    </div>
  );
};

export default Collection;