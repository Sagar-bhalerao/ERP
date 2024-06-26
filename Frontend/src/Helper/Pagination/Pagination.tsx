import { FC } from "react";
import Pagination from "react-js-pagination";
interface Page {
    currentPage: number;
    itemperPage: number;
    data: any[];
    handlePageChange: (pageNumber: number) => void;

}
const Paginations: FC<Page> = ({ currentPage, itemperPage, data, handlePageChange }) => {
    return (
        <div className="flex justify-center sticky  sm:overflow-x-auto">
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemperPage}
                totalItemsCount={data.length}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
                itemClass="px-4 py-2 border btn btn-sm rounded-md mr-1"
                linkClass="  hover:text-white hover:bg-blue-600"
                activeClass="bg-blue-600 text-white"
                activeLinkClass="bg-blue-600 text-white"
                prevPageText="<"
                nextPageText=">"
                innerClass="flex"
            />
        </div>
    )
}

export default Paginations;
