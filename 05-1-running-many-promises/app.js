const { getUserInfo, getUserOrders, getUserCartItems } = require('./utils');

async function getUserData(userId) {
  try {
    // Dapatkan nilai userInfo, userOrders, dan userCartItems secara paralel
    const [userInfo, userOrders, userCartItems] = await Promise.all([
      getUserInfo(userId),
      getUserOrders(userId),
      getUserCartItems(userId)
    ]);

    // Kembalikan data dalam bentuk objek
    return {
      userInfo,
      userOrders,
      userCartItems
    };
  } catch (error) {
    // Jika ada kesalahan, kembalikan nilai null
    return null;
  }
}

function main() {
  getUserData(1).then(console.log);
  getUserData(-1).then(console.log); // seharusnya mencetak "null"
}

main();
