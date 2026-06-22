import Title from './Title';

const CollectionHeader = () => {
  return (
    <div className="text-center py-8 text-3xl">
      <Title text1={'SHOP'} text2={'COLLECTION'} />
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Explore the latest styles across men, women, and kids. Use filters to find your perfect match.
      </p>
    </div>
  );
};

export default CollectionHeader;

