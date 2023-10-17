
// <div className="h-[60vh] w-[60vh] -right-[45%] -bottom-[30%] border-none rounded-full shadow-[-45em_-5em_10.9em_#8EFF8B42] absolute overflow-hidden overscroll-none"></div>
//<div className="h-[60vh] w-[60vh] left-[35%] -bottom-[10%] border-none rounded-full shadow-[-45em_-5em_10.9em_#CE9BFF72] absolute "></div>  

import { useEffect, useState } from "react";
import CardList from "./CardsList";
import NoCard from "./NoCard";
import Modal from "./Modal";
import axios from "axios";
import { BASE_URL, EMPTY_FORM_VALUES } from "../constants/constants";
import { useForm } from "react-hook-form"

const UserList = () => {
  const [userList, setUserList] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const { handleSubmit, register, reset, formState: { errors } } = useForm()

  const [updateId, setUpdateId] = useState(null)

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleOpenModal = () => {
    setIsShowModal(true)
  }
  const handleClosedModal = () => {
    setIsShowModal(false)
    setUpdateId(null)
    reset(EMPTY_FORM_VALUES)
  }
  const handleClickUpdate = (userToUpdate) => {
    handleOpenModal()
    reset(userToUpdate)
    setUpdateId(userToUpdate.id)
  }
  const submit = (data) => {
    updateId === null ?
      createUser(data, handleClosedModal)
      :
      updateUser(data, handleClosedModal)
  }
  const getAllUsers = () => {
    axios
      .get(BASE_URL)
      .then(({ data }) => setUserList(data))
      .catch((err) => console.log(err))
  }
  const createUser = (data) => {
    axios
      .post(BASE_URL, data)
      .then(() => {
        handleClosedModal()
        getAllUsers()
      })
      .catch((err) => console.log(err))
  }
  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUser = (data) => {
    axios
      .put(BASE_URL + `${updateId}/`, data)
      .then(() => {
        getAllUsers()
        handleClosedModal()
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <article className={`grid place-items-center w-full  gap-8 ${isShowModal ? "overflow-hidden h-[100vh]" : "overflow-visible "}`}>
        <div className="flex flex-col w-64 gap-8 justify-center items-center ">
          <h3 className="text-[#8EFF8B] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem]  pt-16">List of User</h3>
          <button className="bg-[#CBFFDA] w-full rounded-md text-xs md:text-[0.8rem] lg:text-[0.9rem] h-9 z-10 hover:bg-[#CBFFDA99] hover:text-[#CBFFDA] transition-all" type="button" onClick={handleOpenModal}>Create New User</button>
          <Modal
            isShowModal={isShowModal}
            handleClosedModal={handleClosedModal}
            handleSubmit={handleSubmit}
            register={register}
            submit={submit}
            updateId={updateId}
            errors={errors}
          >
          </Modal>
        </div>
        {
          userList.length === 0 ? <NoCard></NoCard> : <CardList userList={userList} deleteUser={deleteUser} handleClickUpdate={handleClickUpdate}></CardList>
        }
      </article>

    </>
  )
}
export default UserList