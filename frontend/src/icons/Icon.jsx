function Icon({ src, alt = '', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      draggable="false"
    />
  );
}

export default Icon;
