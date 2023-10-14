import Footer from "./footer";
import Premium from "./premium";
import Search from "./search";
import Trends from "./trends";
import WhoFollow from "./who-follow";

export default function Rightbar(){
    return(
         <aside className="w-[350px] mr-2.5 ">
            <Search/>
            <Premium/>
            <Trends/>
            <WhoFollow/>
            <Footer/>
         </aside>
    )
}