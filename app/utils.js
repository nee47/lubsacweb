import CryptoJS from "crypto-js";

// recieves string
export const encrypt = (data) => {
  return CryptoJS.AES.encrypt(data, process.env.SECRET_KEY).toString();
};

export const decrypt = (data) => {
  return CryptoJS.AES.decrypt(data, process.env.SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );
};
