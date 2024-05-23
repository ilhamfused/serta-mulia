const { Firestore } = require("@google-cloud/firestore");

async function getAllPredictDatas(id, data) {
  const db = new Firestore();

  const predictCollection = db.collection("predictions");
  const snapshot = await predictCollection.get();
  return snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      history: doc.data(),
    };
  });
}
module.exports = getAllPredictDatas;
