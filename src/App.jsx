import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import  "./App.css";

import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getPhoto } from "./Services/API";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({
    src: "",
    description: "",
  });

  useEffect(() => {
    if (!query) return;

    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const data = await getPhoto(query, page);
        setTotalPages(data.total_pages);
        if (data.results.length > 0) setPhotos((p) => [...p, ...data.results]);
        else toast.error("There are no results with such search!");
      } catch (error) {
        setError(error.message);
        toast.error("An error occurred while fetching photos.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotos();
  }, [query, page]);

  function handleQuery(resultQuery) {
    setQuery(resultQuery);
    setPage(1);
    setError(null);
    setPhotos([]);
    setTotalPages(0);
  }

  function handleLoadMore() {
    setPage((p) => p + 1);
  }

  function handleModal(state, photo = {}) {
    setModal(state);
    if (state) setSelectedPhoto(photo);
  }
  return (
    <>
      <SearchBar onSubmit={handleQuery} isLoading={isLoading} />
      <div>
        {photos.length > 0 && !error && (
          <ImageGallery photos={photos} onSelect={handleModal} />
        )}
        {totalPages > page && !isLoading && !error && (
          <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
        )}
        {error && <ErrorMessage />}
        {isLoading && !error && <Loader />}
        <ImageModal isOpen={modal} photo = {selectedPhoto} onChange={handleModal}/>
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;