const NUMBERS = {
  PRIMARY: '2347072692701',
  SECONDARY: '2347072692701'
};

export const generateWhatsAppLink = (message) => {
  const number = NUMBERS.PRIMARY;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

export const WHATSAPP_MSGS = {
  SWAP: (have, want) => `I want to swap my ${have} for a ${want}. Please provide a valuation.`,
  BUY: (item, condition) => `I want to buy the ${item} (${condition}). Is it still available?`,
  VERIFY: (platform) => `I need help with ${platform} verification/blue tick.`,
  USDT: (amount) => `I want to exchange ${amount} USDT. What is your current rate?`,
  CURRENCY: (game, amount) => `I want to buy ${amount} ${game} currency. What are your prices?`
};
