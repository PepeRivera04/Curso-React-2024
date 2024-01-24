import { useParams } from "react-router-dom";

const Post = () => {
  const parametros = useParams();

  return <div>Estas viendo el contenido del post : {parametros.postId}</div>;
};

export default Post;
