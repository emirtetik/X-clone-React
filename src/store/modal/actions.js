import {store} from '~/store'
import { _setModal, _removeModal } from '.'



                           //data yoksa boş bir obje 
export const setModal = (name,modalData = false) => {return store.dispatch(_setModal({name,modalData}))}
export const removeModal = () => {return store.dispatch(_removeModal())}

 