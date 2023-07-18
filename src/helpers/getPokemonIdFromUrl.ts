const getPokemonIdFromUrl = (url: string): string => {
  const matched = url.match(/\/\d+/);
  if (!matched || !matched[0]) return '1';
  const id = matched[0].replace(/\//g, '');
  return id;
};

export default getPokemonIdFromUrl;
