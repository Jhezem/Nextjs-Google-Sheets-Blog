/**
 * Query blogs from the google sheet
 * @param {string} collection - This is the name of the sheet
 * @param {string=} uid - The uid of specific post
 * @returns
 */

export const getDocuments = async (collection, uid) => {
  const res = await fetch(
    `http://localhost:3000/api/blog?collection=${collection}&uid=${
      uid ? uid : ""
    }`
  );
  const data = await res.json();
  return data;
};
