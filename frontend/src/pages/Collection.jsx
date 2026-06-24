import { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filerProducts,setFilterProducts]  = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relevant');
  
  const toggleCategory = (e) =>{
    const value = e.target.value;
    setCategory(prev => (prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]));
  }

  const toggleSubCategory = (e) =>{
    if (subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))

    }else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();
    if(category.length>0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length>0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    return productsCopy;
  };

  const sortAndSetProducts = (baseProducts) =>{
    const fpCopy = baseProducts.slice();
    switch (sortType){
      case 'low-high':
        fpCopy.sort((a,b) => (a.price - b.price));
        break;

      case 'high-low':
        fpCopy.sort((a,b) => (b.price - a.price));
        break;

      case 'relevant':
      default:
        // keep natural order (as provided by assets/products)
        break;
    }
    setFilterProducts(fpCopy);
  }

  const handleSort = () =>{
    const filtered = applyFilter();
    sortAndSetProducts(filtered);
  }


  
  useEffect(() =>{
    setFilterProducts(products);
  },[])

  useEffect (()=>{
    // whenever filters or sort changes, recompute list
    const filtered = applyFilter();
    sortAndSetProducts(filtered);
  },[category,subCategory,sortType])

  return (
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

       {/*filer options  */}

      <div className='min-w-60'>
        <p onClick = {() => setShowFilter(!showFilter)}className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img className= {`h-3 sm:hidden ${showFilter ? 'rotate-90' :''}`} src ={assets.dropdown} alt=""/>
        {/* category filter */}
        <div className={`border border-gray-30 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type ="checkbox" value={'Men'}onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type ="checkbox" value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type ="checkbox" value={'Kid'}onChange={toggleCategory}/>Kid
            </p>
          </div>
        </div>
        {/* sub-category filter */} 
        <div className={`border border-gray-30 pl-5 py-3 mt-5 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type ="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type ="checkbox" value={'Bottomwear'}onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type ="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
        

      </div>

      {/* right side */}

      <div className=' flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filerProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection