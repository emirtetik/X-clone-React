import React from "react";
// import {useClickAway} from 'react-use';
export default function Search() {
 
  const [query, setQuery] = React.useState("");
  const [focus, setFocus] = React.useState(false);
  
 
//   const ref = useClickAway(ref, () => {
//     setFocus(false)
//   });

  return (
    
    <div 
    //  ref={ref}
    className="min-h-[32px] h-[53px] mb-3 flex items-center sticky top-0 bg-[var(--background-primary)] z-10">
      <label
        htmlFor=""
        className="h-[43px] rounded-full bg-[var(--background-third)] relative w-full group border border-transparent focus-within:bg-[var(--background-primary)] focus-within:border-[var(--color-primary)]"
      >
        <div className="w-[55px] h-full flex justify-center items-center absolute top-0 left-0 pointer-events-none">
          <svg
            viewBox="0 0 24 24"
            width={19}
            height={19}
            className=" min-h-[32px] text-[var(--color-base-secondary)]  group-focus-within:text-[var(--color-primary)]"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder="Ara"
          className="w-full h-full bg-transparent pl-[55px]  outline-none placeholder-[var(--color-base-secondary)] "
        />
        {query && focus && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="w-5 h-5 rounded-full bg-[var(--color-primary)]  flex items-center justify-center text-black min-w-[22px] absolute top-1/2 -translate-y-1/2 right-3 "
          >
            <svg viewBox="0 0 15 15" width={10} height={10}>
              <path
                fill="currentColor"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              ></path>
            </svg>
          </button>
        )}
     
      </label>
      {focus && (
          <div 
           onClick={() => setFocus(true)}
          className="absolute mi-h-[100px] w-[350px] -left-px -translate-y-1 rounded-lg bg-[var(--background-primary)] top-full  shadow-box max-h[calc(80vh-53px)]">
           <p className="p-3 pt-5 text-[var(--color-base-secondary)] text-center leading-5">
           Try searching for people, lists, or keywords
           </p>
          </div>
        )}
    </div>
  );
}
