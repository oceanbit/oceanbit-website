import * as React from "react"
import { navigate } from "gatsby"
import ReactPaginate from "react-paginate"
import './pagination.css';

export const Pagination = ({ pageCount, pageIndex, rootPath, pagePath }) => {
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      forcePage={pageIndex}
      onPageChange={({ selected: pageNum }) => {
        if (pageNum <= 0) {
          navigate(rootPath)
          return
        }
        navigate(`${pagePath}/${pageNum + 1}`)
      }}
      hrefBuilder={pageIndexPlusOne => {
        if (pageIndexPlusOne <= 1) return rootPath
        return `${pagePath}/${pageIndexPlusOne}`
      }}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
    />
  )
}
