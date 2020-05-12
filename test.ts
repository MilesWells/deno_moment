// Copyright 2018-2019 the ZhiBing. All rights reserved. MIT license.
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { moment } from "./moment.ts";

Deno.test({
  name: "basic test",
  fn() {
    assertEquals(
      moment.utc(0).format("YYYY-MM-DD"),
      "1970-01-01"
    );
    assertEquals(
      moment.utc("2012 July", "YYYY MMM", "en").toString(),
      "Sun Jul 01 2012 00:00:00 GMT+0000"
    );
    assertEquals(
      moment.utc("It is 2012-05-25", "YYYY-MM-DD").isValid(),
      true
    );
  }
});
