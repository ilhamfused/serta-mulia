const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
  const db = new Firestore({ projectId: "ilham-serta-mulia" });

  const predictCollection = db.collection("prediction");
  // console.log("sampai sini");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
