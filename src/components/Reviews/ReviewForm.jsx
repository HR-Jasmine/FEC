import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import '../styles/Reviews/review-form.css';


const ReviewForm = ({showForm, onClose, product, metaData}) => {
  if (!showForm) {
    return null;
  }

  const imgStyle = {
    "max-height": "150px",
    "max-width": "150px",
    "height": "auto",
    "width": "auto",
}

  const blankFormState = {
    rating: 0,
    recommend: false,
    characteristics: {},
    reviewSummary: '',
    reviewBody: '',
    photos: [],
    nickname: '',
    email: ''
  }

  const scales = {
    Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  };


  const [formState, setFormState] = useState(blankFormState);

  const formVerify = () => {
    const submitData = {
      product_id: Number(metaData.product_id),
      rating: formState.rating,
      summary: formState.reviewSummary,
      body: formState.reviewBody,
      recommend: formState.recommend,
      name: formState.nickname,
      email: formState.email,
      photos: formState.photos,
      characteristics: formState.characteristics
    }

    let alertMsg = '';

    if (submitData.rating === 0) {
      alertMsg += 'You must give the product a star rating\n';
    }

    if (Object.keys(submitData.characteristics).length !== Object.keys(metaData.characteristics).length) {
      alertMsg += 'You must rate every characteristic of the product\n';
    }

    if (submitData.body.length < 51) {
      alertMsg += 'You must have a review over 50 characters long\n'
    }

    if (submitData.name === '') {
      alertMsg += 'You must give a username\n';
    }

    if (submitData.email === '') {
      alertMsg += 'You must provide an email address';
    }

    if (alertMsg !== '') {
      alert(alertMsg);
    } else {
      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`, submitData,
      {
        headers: {
          'Authorization': process.env.API_KEY,
        }
      });
      return true;
    }
  }

  const ratingMeaning = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  }

  const scaleChange = (e) => {
    let currChars = {...formState.characteristics};
    currChars[e.target.name] = Number(e.target.value);
    setFormState({...formState, characteristics: currChars});
  }

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dhjvvkko0",
      uploadPreset: 'jasmine',
      // inlineContainer: document.getElementById('imageUploaderContainer'),
      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      sources: [ "local"], // restrict the upload sources to URL and local files
      multiple: false,  //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      // clientAllowedFormats: ["images"], //restrict uploading to image files only
      // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      theme: "purple" //change to a purple theme
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        let copyOfFormState = {...formState};
        copyOfFormState.photos.push(result.info.secure_url);
        setFormState(copyOfFormState);
      }
    }
  );

  return (
    <div className="review-form-modal">
      <div className="review-form-modal-content">
        <div className="review-form-modal-header">
          <h4 className="review-form-modal-title">Write your review</h4>
          <h6>About the {product.name}</h6>
        </div>
        <div className="review-form-modal-body">
          <form>
            <label className="review-star-rating">
              <strong>Rating: {formState.rating === 0 ? null : ratingMeaning[formState.rating]}</strong>
              <input className="review-rating" max="100" onChange={(e) => {
                let updatedFormState = {...formState, rating: Math.ceil(e.target.value / 20)};
                setFormState(updatedFormState);
                e.target.style.setProperty('--value', Math.ceil(e.target.value / 20));
              }} step="1" type="range" value={formState.rating}></input><br></br>
            </label>&nbsp;&nbsp;
            <div className="review-form-checkbox">
              Do you recommend this product?
              <input type="checkbox" value={formState.recommend} onChange={() => {
                let updatedForm = {...formState, recommend: !formState.recommend};
                setFormState(updatedForm);
              }}></input>
            </div>
              <input type="text" className="review-summary" value={formState.reviewSummary} placeholder="Title*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, reviewSummary: e.target.value};
              setFormState(updatedForm);
            }}></input><br></br>
            <textarea rows={5} cols={50} className="review-body" value={formState.reviewBody} placeholder="Review*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, reviewBody: e.target.value};
              setFormState(updatedForm);
            }}></textarea><br></br>
            <div className="review-chars-left">
              {formState.reviewBody.length > 49 ? "Minimum reached" : "Minimum required chars left: " + (50 - formState.reviewBody.length)}
            </div>
            <div className="review-uploaded-image-holder">
              {formState.photos.map((photo, i) => {
                console.log('displaying', photo);
                return (<img className="review-img" style={imgStyle} src={photo} key={i}></img>);
              })}
            </div>
            <button className="upload-image-button" hidden={formState.photos.length === 5} onClick={(e) => {
              e.preventDefault();
              myWidget.open();
            }}>Add image (up to 5)</button><br></br>
            <input type="text" className="review-nickname" value={formState.nickname} placeholder="Username*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, nickname: e.target.value};
              setFormState(updatedForm);
            }}></input>
            <input type="text" className="review-nickname" value={formState.email} placeholder="Email*" onChange={(e) => {
              e.preventDefault();
              let updatedForm = {...formState, email: e.target.value};
              setFormState(updatedForm);
            }}></input><br></br><br></br>
            {Object.keys(metaData.characteristics).map((char, i) => {
              return (
                <div className="char-holder" key={i}>
                  <p><b>{char}</b></p>
                  <input type="radio" name={metaData.characteristics[char].id} value={1} onClick={scaleChange}></input>&nbsp; {scales[char][0]}<br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={2} onClick={scaleChange}></input>&nbsp; {scales[char][1]}<br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={3} onClick={scaleChange}></input>&nbsp; {scales[char][2]}<br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={4} onClick={scaleChange}></input>&nbsp; {scales[char][3]}<br></br>
                  <input type="radio" name={metaData.characteristics[char].id} value={5} onClick={scaleChange}></input>&nbsp; {scales[char][4]}<br></br><br></br>
                </div>
              )
            })}
          </form>

        </div>
        <div className="review-form-modal-footer">
          <button onClick={(e) => {
            e.preventDefault();
            let verified = formVerify();
             if (verified) {
              onClose();
             }
          }}>Submit</button>&nbsp;&nbsp;
          <button onClick={onClose}>Close</button>
        </div>
      </div>
      <div id="imageUploaderContainer"></div>
    </div>
  )
}

export default ReviewForm;