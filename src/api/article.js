import request from "@/utils/request";

// 查询文章列表
export function articleList(query) {
  return request({
    url: "/article/articleList",
    method: "get",
    headers: {
      isToken: false,
    },
    params: query,
  });
}

//查询最热文章
// export function hotArticleList() {
//   return request({
//     url: "/article/hotArticleList",
//     headers: {
//       isToken: false,
//     },
//     method: "get",
//   });
// }
//查询最热文章
export function hotArticleList() {
  console.log("开始请求最热文章列表");
  return request({
    url: "/article/hotArticleList",
    method: "get",
    headers: {
      isToken: false,
    },
  })
    .then((response) => {
      console.log("完整响应对象：", response); // 打印完整的响应对象
      console.log("最热文章列表响应数据：", response.data); // 假设您的数据在response.data中
      return response;
    })
    .catch((error) => {
      console.error("请求最热文章列表失败，错误信息：", error);
      return Promise.reject(error);
    });
}
//获取文章详情
export function getArticle(articleId) {
  return request({
    url: "/article/" + articleId,
    headers: {
      isToken: false,
    },
    method: "get",
  });
}

export function updateViewCount(articleId) {
  return request({
    url: "/article/updateViewCount/" + articleId,
    headers: {
      isToken: false,
    },
    method: "put",
  });
}

[
  {
    categoryId: "2",
    content:
      "![Snipaste_20220115_165812.png](https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/15/1d9d283f5d874b468078b183e4b98b71.png)\r\n\r\n## sda \r\n\r\n222\r\n### sdasd newnewnew",
    createTime: "2022-01-17 14:58:37",
    delFlag: 0,
    id: "5",
    isComment: "0",
    isTop: "1",
    status: "0",
    thumbnail: "",
    title: "sdad",
    viewCount: "44",
  },
];
