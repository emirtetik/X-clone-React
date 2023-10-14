import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function RightbarSection({title, children, more}){
    return(
        <section className="bg-[#16181c]  rounded-2xl overflow-hidden mb-4 border border-[#16181c] ">
        <h5 className="flex py-3 px-4 items-center text-xl font-extrabold leading-6 text-[#e7e9ea]">
            {title}
        </h5>
        <div className="grid">
          {children}
        </div>
      {more && (
           <Link
           to={more}
           className="flex items-center px-4 py-3  text-[#1d9bf0] hover:bg-[#eff3f41a] transition-colors "
         >
           daha fazla göster
         </Link>
      )}
        </section>
     
    )
}

RightbarSection.propTypes ={
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
}

RightbarSection.defaultProps ={
    more:false
}