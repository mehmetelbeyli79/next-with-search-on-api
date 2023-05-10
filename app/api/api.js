const searchImages = async (term) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
    headers: {
      Authorization: "Client-ID -NhMb9Rhaj35OFDvAWe4mARl3k0Sh6qcdvamRF3w21E",
    },
  });
  const data = await response.json();
  return data.results;
};

export default searchImages;
