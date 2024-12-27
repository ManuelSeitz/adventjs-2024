type GiftList = {
  missing: Record<string, number>;
  extra: Record<string, number>;
};

function fixGiftList(received: string[], expected: string[]): GiftList {
  const giftList: GiftList = { missing: {}, extra: {} };

  for (const expectedGift of new Set([...received, ...expected])) {
    const expectedGiftsCount = expected.filter(
      (gift) => gift === expectedGift
    ).length;

    const receivedGiftsCount = received.filter(
      (gift) => gift === expectedGift
    ).length;

    if (expectedGiftsCount > receivedGiftsCount) {
      giftList.missing[expectedGift] = expectedGiftsCount - receivedGiftsCount;
    } else if (expectedGiftsCount < receivedGiftsCount) {
      giftList.extra[expectedGift] = receivedGiftsCount - expectedGiftsCount;
    }
  }

  return giftList;
}

export default fixGiftList;
