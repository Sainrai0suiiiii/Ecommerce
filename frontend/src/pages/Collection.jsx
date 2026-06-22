import { useContext, useMemo, useState } from 'react';
import { assets } from '../assets/assets';
import CollectionHeader from '../components/CollectionHeader';
import ProductItem from '../components/ProductItem';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const categoryOptions = [
    { label: 'MEN', value: 'men' },
    { label: 'WOMEN', value: 'women' },
    { label: 'KIDS', value: 'kids' },
  ];

  const typeOptions = [
    { label: 'TOPWEAR', value: 'topwear' },
    { label: 'BOTTOMWEAR', value: 'bottomwear' },
    { label: 'FULL OUTFIT', value: 'full outfit' },
    { label: 'WINTERWEAR', value: 'winterwear' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const categoryOk = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const typeOk = selectedTypes.length === 0 || selectedTypes.includes(p.subCategory);
      return categoryOk && typeOk;
    });
  }, [products, selectedCategories, selectedTypes]);

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleType = (value) => {
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTypes([]);
  };

  return (
    <div className="pt-10">
      <CollectionHeader />

      <div className="flex flex-col sm:flex-row gap-8 border-t pt-10">

        {/* ✅ LEFT SIDEBAR — both filters inside here */}
        <div className="min-w-60">

          {/* Filter toggle header */}
          <div className="flex items-center justify-between">
            <p className="my-2 text-xl cursor-pointer">FILTERS</p>
            <img
              className={`h-3 sm:hidden cursor-pointer transition-transform ${showFilter ? 'rotate-180' : ''}`}
              src={assets.dropdown}
              alt=""
              onClick={() => setShowFilter((s) => !s)}
            />
          </div>

          {/* Category filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {categoryOptions.map((opt) => (
                <label key={opt.value} className="flex gap-2 items-center cursor-pointer">
                  <input
                    className="w-3"
                    type="checkbox"
                    checked={selectedCategories.includes(opt.value)}
                    onChange={() => toggleCategory(opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* ✅ Type filter — now inside sidebar */}
          <div className={`border border-gray-300 pl-5 py-3 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {typeOptions.map((opt) => (
                <label key={opt.value} className="flex gap-2 items-center cursor-pointer">
                  <input
                    className="w-3"
                    type="checkbox"
                    checked={selectedTypes.includes(opt.value)}
                    onChange={() => toggleType(opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          {/* Clear filters */}
          {(selectedCategories.length > 0 || selectedTypes.length > 0) && (
            <button
              onClick={clearFilters}
              className="mt-4 text-xs text-gray-600 hover:text-black underline"
            >
              Clear filters
            </button>
          )}

        </div>
        {/* END SIDEBAR */}

        {/* Product grid */}
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-4">
            {filteredProducts.length} result{filteredProducts.length === 1 ? '' : 's'}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Collection;