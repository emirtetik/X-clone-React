import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function RightbarSection({title, children, more}){
    return(
        <section className="bg-[var(--background-secondary)]  rounded-2xl mb-4 border border-[var(--background-secondary)] ">
        <h5 className="flex py-3 px-4 items-center text-xl font-extrabold leading-6 text-[var(--color-base)]">
            {title}
        </h5>
        <div className="grid">
          {children}
        </div>
      {more && (
           <Link
           to={more}
           className="flex items-center px-4 py-3 rounded-2xl text-[var(--color-primary)] hover:bg-[var(--background-third)] transition-colors "
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