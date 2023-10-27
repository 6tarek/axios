import { axios } from "https://deno.land/x/axios_deno/axios/mod.ts";

let api = new axios ("https://test.com/api",{headers:{"auth":"test"}})



api.get("users")
api.post("users",{name:"test"})
api.put("users/465464646",{name:"test2"})
api.patch("users/465464646",{name:"test2"})
api.delete("users/4545454754")