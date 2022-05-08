import axios from 'axios';

export const GET = async (url, config, sFunc, fFunc) => {
  try {
    const response = await axios.get(url, config);
    if (typeof sFunc === 'function') {
      sFunc(response);
    }
    return response;
  } catch (e) {
    if (typeof fFunc === 'function') {
      fFunc(e);
    }
    return e;
  }
};

export const POST = async (url, config, sFunc, fFunc) => {
  try {
    const response = await axios.post(url, config);
    if (typeof sFunc === 'function') {
      sFunc(response);
    }
    return response;
  } catch (e) {
    if (typeof fFunc === 'function') {
      fFunc(e);
    }
    return e;
  }
};
export const PUT = async (url, config, sFunc, fFunc) => {
  try {
    const response = await axios.put(url, config);
    if (typeof sFunc === 'function') {
      sFunc(response);
    }
    return response;
  } catch (e) {
    if (typeof fFunc === 'function') {
      fFunc(e);
    }
    return e;
  }
};

export const DELETE = async (url, config, sFunc, fFunc) => {
  try {
    const response = await axios.delete(url, config);
    if (typeof sFunc === 'function') {
      sFunc(response);
    }
    return response;
  } catch (e) {
    if (typeof fFunc === 'function') {
      fFunc(e);
    }
    return e;
  }
};
