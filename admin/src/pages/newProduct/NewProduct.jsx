import React, { useContext, useState } from "react";
import "./newProduct.css";
import storage from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

// const storageRef = ref(storage, "images/" + file.name);
const NewProduct = () => {
  // creating 12 useStates is not a good idea, therefore instead of this i am creating 1 useState for the inputs &
  // individual useStates for the images & videos

  // for inputs
  const [movie, setMovie] = useState(null);
  // to update all the inputs at the same time, ill add a name property to every input

  // for individual img/videos
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgThumbnail, setImgThumbnail] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0); // will show us how many files have been uploaded (initially its 0)

  const { dispatch } = useContext(MovieContext);

  // handleChange func for all the texts
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  // console.log(movie); // therefore all the inputs are updating through a single useState hook

  // console.log(img);
  // console.log(imgTitle);
  // console.log(imgThumbnail);
  // console.log(trailer);
  // console.log(video);

  // func to take all the items & upload it to the firebase
  const upload = (items) => {
    // to upload imgs & videos
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      // Upload file to the object 'items/item.file.name.jpg/mp4'
      const storageRef = ref(storage, "/items/" + fileName);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (err) => console.log(err),
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // finally we can take this url & setMovie with their labels
            setMovie((prev) => {
              return { ...prev, [item.label]: downloadURL };
            });
            // And after setting my state, i can increase my uploaded number as initial was 0
            setUploaded((prev) => prev + 1);
            console.log("File available at", downloadURL);
          });
        }
      );
    });
  };

  // func to handle Upload & send it to firebase
  const handleUpload = (e) => {
    e.preventDefault();
    // all the items are in 1 array and each item is an object
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgThumbnail, label: "imgThumbnail" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  // console.log(movie);

  // func for sending to DB
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgThumbnail"
            name="imgThumbnail"
            onChange={(e) => setImgThumbnail(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Friends"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Age Limit</label>
          <input
            type="text"
            placeholder="Age Limit"
            name="ageLimit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
};

export default NewProduct;
