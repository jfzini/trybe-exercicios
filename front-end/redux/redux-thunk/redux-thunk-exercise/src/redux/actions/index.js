export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCESSFUL = 'REQUEST_SUCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({ type: REQUEST_STARTED });

const requestSucessful = (imageURL) => ({ type: REQUEST_SUCESSFUL, payload: imageURL });

const requestFailed = (error) => ({ type: REQUEST_FAILED, payload: error });

export const fetchDogImage = () => {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json)
      .then((data) => dispatch(requestSucessful(data.message)))
      .catch((error) => dispatch(requestFailed(error)));
  };
};
