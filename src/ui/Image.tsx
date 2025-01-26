const Image = ({
  src,
  alt = "Bordered avatar"
}: {
  src: string;
  alt?: string;
}) => {
  return (
    <img
      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
      src={src}
      alt={alt}
    />
  );
};

export default Image;
