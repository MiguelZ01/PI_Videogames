// import React from "react";
// import style from "./Paginate.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { nextPage, prevPage, handleNumber } from "../../redux/actions/action";

// const Paginate = ({ cantPages }) => {

//     const { numPage } = useSelector((state) => state)
//     const dispatch = useDispatch();

//     const next = () => {
//         dispatch(nextPage());
//     }

//     const prev = () => {
//         dispatch(prevPage());
//     }

//     const number = (n) => {
//         dispatch(handleNumber(n));
//     }

//     return (
//         <div>
//             {
//                 numPage > 1 ? (<div>
//                     <button onClick={prev}>PREV</button>
//                     <p>{numPage - 1}</p>
//                 </div>) : null
//             }

//             <h3>{numPage}</h3>
//             {numPage < cantPages ? (
//                 <div>
//                     <p>{numPage + 1}</p>
//                     <button onClick={next}>NEXT</button>
//                 </div>
//             ) : null}
//         </div>
//     )
// }

// export default Paginate