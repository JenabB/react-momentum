import { createClient } from "pexels";

const getImage = async () => {
  const client = createClient(
    "563492ad6f91700001000001f4437833d1ce4ef58f80595aa44d5417"
  );

  return client.photos.show({ id: 1624496 }).then((photo) => {
    return photo;
  });
};

export default getImage;
