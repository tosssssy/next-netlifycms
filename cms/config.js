export default {
  backend: {
    name: "git-gateway",
    branch: "master",
  },
  publish_mode: "editorial_workflow",
  media_folder: "contents/images",
  collections: [
    {
      name: "blog",
      label: "Blog",
      folder: "contents/blog",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}",
      fields: [
        {
          label: "タイトル (必須)",
          name: "title",
          widget: "string",
        },
        {
          label: "投稿日時 (必須)",
          name: "date",
          widget: "string",
          hint: "e.g. 2021年1月1日",
        },
        {
          label: "本文 (必須)",
          name: "body",
          widget: "markdown",
          hint: "本文はリッチテキスト形式でお願いします。画像がある場合も本文に含めて下さい。",
        },
        {
          label: "テンプレートタイプ",
          name: "type",
          widget: "hidden",
          default: "blog",
        },
      ],
    },
  ],
};
