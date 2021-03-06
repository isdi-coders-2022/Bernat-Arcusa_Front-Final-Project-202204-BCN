import { useEffect, useState } from "react";
import TattooItem from "../../components/TattooItem/TattooItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadTattoosThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import { ITattoo } from "../../types/types";
import PublicListPageStyled from "./PublicListPageStyled";

export const scrollUp = () => {
  window.scrollTo(0, 0);
};

const PublicListPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tattoos: ITattoo[] = useAppSelector((state) => state.tattoos);
  const logged = useAppSelector((state) => state.user.logged);
  const loggedUsername = useAppSelector((state) => state.user.username);

  const initialPage: ITattoo[] = [];
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(loadTattoosThunk());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(tattoos.slice(0, 6));
  }, [tattoos]);

  useEffect(() => {
    setCurrentPage(tattoos.slice(index, index + 6));
  }, [index, tattoos]);

  return (
    <>
      <p className="greeting">{logged ? `Logged as @${loggedUsername}` : ""}</p>
      <PublicListPageStyled>
        <ul className="page">
          {currentPage.map((tattoo) => {
            return <TattooItem key={tattoo._id} tattoo={tattoo} />;
          })}
        </ul>

        <div className="pagination" onClick={scrollUp}>
          {index > 0 && (
            <button
              onClick={() => {
                if (index >= 6) {
                  setIndex(index - 6);
                }
              }}
            >
              <img
                className="button__icon--back"
                src="./images/arrow-icon.svg"
                alt="back"
                title="back"
              />
            </button>
          )}
          {tattoos.length > index + 6 && (
            <button
              onClick={() => {
                if (index < tattoos.length - 6) {
                  setIndex(index + 6);
                }
              }}
            >
              <img
                className="button__icon--next"
                src="./images/arrow-icon.svg"
                alt="next"
                title="next"
              />
            </button>
          )}
        </div>
      </PublicListPageStyled>
    </>
  );
};

export default PublicListPage;
