export const fetchCoins = async () => {
  const res = await fetch('https://bitcoinzoomtraining.com/base/');
  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error('Failed to fetch assets');
  }
};
