import { useContext } from "react"
import {PopupContext} from "./popupContext"


export const usePopUp = () => {
  return (
    useContext(PopupContext)
  )
}
