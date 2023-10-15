import modals from "~/routes/modals"
import { removeModal } from "~/store/modal/actions"
export default function Modal(){
 
     const currentModal = modals.find(modal => modal.name === "appearanceModal")

    return(
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-[var(--background-modal)]"> 
        <div className="bg-[var(--background-primary)] max-w-[600px] rounded-2xl max-h-[90vh] overflow-auto">
        {currentModal && <currentModal.element close={removeModal}/>}
        </div>
        </div>
    )
}