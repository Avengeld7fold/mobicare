import assert from "node:assert/strict";
import { test } from "node:test";
import { STORES, STORE_OVERVIEW_BOUNDS, storeDirectionsUrl, storeWhatsAppUrl } from "../lib/stores.ts";

test("only the three confirmed Bali branches are listed in approved order", () => {
  assert.deepEqual(STORES.map(({ key }) => key), ["teuku-umar", "canggu", "gatot-subroto"]);
  assert.deepEqual(STORES.map(({ phone }) => phone), ["08991099999", "081999334664", "08133351114"]);
  assert.equal(new Set(STORES.map(({ key }) => key)).size, 3);
  for (const store of STORES) {
    assert.equal(store.schedule, null, "unverified hours must not imply open or closed");
    assert.ok(store.lat > -8.8 && store.lat < -8.5);
    assert.ok(store.lng > 115 && store.lng < 115.4);
    assert.equal(new URL(store.mapUrl).hostname, "share.google");
    assert.match(storeWhatsAppUrl(store), /^https:\/\/wa\.me\/62\d+$/);
    const directions = new URL(storeDirectionsUrl(store));
    assert.equal(directions.searchParams.get("destination"), `${store.lat},${store.lng}`);
  }
});

test("overview focuses on South Bali and includes every current branch", () => {
  const [[south, west], [north, east]] = STORE_OVERVIEW_BOUNDS;
  assert.ok(west >= 115 && east < 116, "overview must not include Lombok");
  for (const [lat, lng] of STORES.map(s => [s.lat, s.lng])) {
    assert.ok(lat >= south && lat <= north && lng >= west && lng <= east);
  }
});

test("Google ratings are branch-specific verified snapshots, never live defaults", () => {
  assert.deepEqual(STORES.map(s => [s.googleRatingSnapshot.rating, s.googleRatingSnapshot.reviewCount]), [[4.4, 167], [5, 1], [4.9, 61]]);
  const sources = new Set();
  for (const { googleRatingSnapshot: snapshot } of STORES) {
    assert.equal(snapshot.checkedAt, "2026-10-20");
    const url = new URL(snapshot.sourceUrl);
    assert.equal(url.origin, "https://www.google.com");
    assert.ok(url.pathname.startsWith("/maps/place/"));
    assert.ok(snapshot.rating >= 0 && snapshot.rating <= 5);
    assert.ok(Number.isInteger(snapshot.reviewCount));
    sources.add(snapshot.sourceUrl);
  }
  assert.equal(sources.size, 3);
});
