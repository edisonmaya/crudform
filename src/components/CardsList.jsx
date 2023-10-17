import { useState } from "react"
import Card from "./Card"
import ModalDelete from "./ModalDelete"

const CardList = ({ userList, deleteUser, handleClickUpdate }) => {
  const [modalDeleteId, setModalDeleteId] = useState(null)

  const openModalDelete = (id) => {
    setModalDeleteId(id)
  }
  const closedModalDelete = () => {
    setModalDeleteId(null)
  }
  return (
    <>

      <div className="grid gap-2 w-[18rem] sm:w-[500px]  ">
        <Card userList={userList} openModalDelete={openModalDelete} setModalDeleteId={setModalDeleteId} handleClickUpdate={handleClickUpdate}></Card>
      </div>

      {
        modalDeleteId !== null && <ModalDelete deleteUser={deleteUser} id={modalDeleteId} closedModalDelete={closedModalDelete} ></ModalDelete>
      }


    </>
  )
}
export default CardList