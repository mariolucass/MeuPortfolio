import * as styled from "./styles";
import * as layouts from "../../layouts";
import { useLoadingContext } from "../../../context/LoadingContext/LoadingContext";

export const Technologies = () => {
  const { loading } = useLoadingContext();

  return (
    <styled.Main>
      <layouts.Header />
      {loading ? <layouts.Loading /> : <layouts.Welcome />}
    </styled.Main>
  );
};
