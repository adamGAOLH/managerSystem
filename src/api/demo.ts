import request from "@/http/request";

interface objs {
  id: string;
  age: number;
  sex: string;
}

class api {
  public static demo = {
    list: (obj: objs) => request.get("/api/list", obj),
  };
  public static mocs = {
    lists: () => request.get("/demo/list"),
  };
}

export { api };
