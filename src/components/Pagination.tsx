import type { ReactElement, ReactNode } from "react";
import { CustomIcon } from "./CustomIcon";
import { CustomButton } from "./CustomButton";
import { Loader } from "./Loader";

interface IPaginationProps {
  currentPage: number;
  pageCount: number;
  next: () => void;
  previous: () => void;
  loading: boolean;
}

export const Pagination = ({
  currentPage,
  pageCount,
  next,
  previous,
  loading,
}: IPaginationProps): ReactElement => {
  const renderPagination = (): ReactNode => {
    if (loading) return <Loader small />;

    return (
      <p>
        {currentPage} / {pageCount}
      </p>
    );
  };
  return (
    <section className="pagination">
      <CustomButton
        disabled={currentPage === 1 ? true : undefined}
        onClick={previous}
      >
        <CustomIcon icon="arrow_circle_left" large />
      </CustomButton>
      {renderPagination()}
      <CustomButton
        disabled={currentPage === pageCount ? true : undefined}
        onClick={next}
      >
        <CustomIcon icon="arrow_circle_right" large />
      </CustomButton>
    </section>
  );
};
