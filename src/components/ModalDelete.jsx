//top-0 right-0 bottom-0 left-0
const ModalDelete = ({ deleteUser, id, closedModalDelete, setModalDeleteId }) => {
  const handleDelete = () => {
    deleteUser(id)
    closedModalDelete()
  }
  return (

    <section className={`fixed top-0 right-0 bottom-0 left-0  z-20 grid place-items-center bg-[#E5E5E550] transition-all ${setModalDeleteId !== null ? "visible" : "invisible"} `}>
      <div className=" p-2 relative md:mt-8 grid place-items-center w-[18rem]  bg-[#3C3C3D] border-[1px] border-[#E5E5E5] px-2 rounded-lg ">
        <img className="absolute -top-16 inset-x-0 mx-auto w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] " src="/EllipseUser.png" alt="" />

        <div className="w-full grid gap-3 place-items-center ">
          <div className="pt-16 pb-10 text-center text-white ">
            <h2>Are you sure you want to delete this user?</h2>
          </div>

          <button className="bg-[#D85D5D] text-white w-[80%] rounded-md text-xs md:text-[0.8rem] lg:text-[0.9rem] h-9 z-10 hover:bg-[#D85D5D99] hover:text-[#CBFFDA] transition-all"
            type="button"
            onClick={handleDelete}>Yes, delete</button>
          <button className="bg-[#3C3C3D] text-[#CBFFD9] w-[80%] rounded-md text-xs md:text-[0.8rem] lg:text-[0.9rem] h-9 z-10 hover:bg-[#CBFFDA30] hover:text-[#CBFFDA] transition-all"
            type="button"
            onClick={closedModalDelete}>or cancel</button>
        </div>
      </div>
    </section>

  )
}
export default ModalDelete