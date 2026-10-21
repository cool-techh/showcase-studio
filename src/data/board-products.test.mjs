import { describe, expect, test } from "bun:test";
import { boardProducts } from "./board-products";

describe("uploaded board catalogue", () => {
  for (const [size, price] of [[6, 6], [7, 6.9], [8, 8.15], [9, 9.5], [10, 11], [12, 14.5]]) {
    test(`${size}-inch MDF cake board price`, () => {
      expect(boardProducts.find(p => p.id === `cb-mdf-${size}-inch`)?.price).toBe(price);
    });
  }
  test("all boards belong in Cake Boards & Pastry Boards", () => {
    expect(boardProducts).toHaveLength(15);
    expect(boardProducts.every(p => p.category === "bakery-supply" && p.subcategory === "Cake Boards & Pastry Boards")).toBe(true);
  });
  test("nine unpriced pastry boards remain unpriced", () => {
    const pastry = boardProducts.filter(p => p.id.startsWith("pb-"));
    expect(pastry).toHaveLength(9);
    expect(pastry.every(p => p.price === 0)).toBe(true);
  });
});
