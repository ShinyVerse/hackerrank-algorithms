const { DecodeDJ } = require("./DecodeDJ");

describe("DecodeDJ", () => {
  test("simple case", () => {
    const song = "ThisWUBsong";
    expect(DecodeDJ(song)).toBe("This song");
  });
  test("double in simple case", () => {
    const song = "ThisWUBWUBsong";
    expect(DecodeDJ(song)).toBe("This song");
  });
  test("no trailing heads or tails", () => {
    const song = "WUBThisWUBsongWUB";
    expect(DecodeDJ(song)).toBe("This song");
  });
});
