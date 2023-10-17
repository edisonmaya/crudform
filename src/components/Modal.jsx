import Form from "./Form"


const Modal = ({ isShowModal, handleClosedModal, handleSubmit, register, submit, handleClear, updateId, errors }) => {
  return (
    <section className={`bg-[#101010] ${isShowModal ? "visible h-[100vh]" : "invisible"}`}>
      <div className={`  absolute z-20 grid place-items-center bg-[#FFFFFF99] top-0 bottom-0 left-0 right-0 transition-all ${isShowModal ? "visible opacity-100 " : "invisible opacity-0"}`}>
        <div className=" relative md:mt-8 grid place-items-center w-[18rem] lg:h-[80%]  bg-[#3C3C3D] border-[1px] border-[#E5E5E5] px-2 rounded-lg ">
          <img className="absolute -top-16 inset-x-0 mx-auto w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] " src="/EllipseUser.png" alt="" />
          <Form handleClosedModal={handleClosedModal} handleSubmit={handleSubmit} register={register} submit={submit} handleClear={handleClear} updateId={updateId} errors={errors}></Form>
        </div>
      </div>
    </section>
  )
}
export default Modal