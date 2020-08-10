const loadFotos = async (callback) => {
  const response = await fetch('http://10.0.2.2:3030/feed');
  const fotos = await response.json();
  callback(fotos);
};

export default loadFotos;