let demlist = {
  code: 200,
  message: "success",
  data: {
    total: 20,
    "row|20": [
      {
        id: "@guid",
        name: "@cname",
        "age|20-30": 23,
        "job|1": ["前端", "测试", " UI", "后台"],
      },
    ],
  },
};

export default {
  "get|/demo/list": demlist,
};
