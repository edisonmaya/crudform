

const Form = ({ handleClosedModal, handleSubmit, register, submit, updateId, errors }) => {

  return (
    <form onSubmit={handleSubmit(submit)} className="grid place-items-start text-xs  leading-5 sm:leading-8  pt-8 sm:pt-12 sm:text-[1rem]" >

      <label className="text-[#8EFF8B] text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem]" htmlFor="first_name">Name</label>
      <input className="bg-[#3C3C3D] border-[1px] border-[#E5E5E5] rounded-sm px-2 text-white w-[200px] outline-none" id="first_name" type="text" autoComplete="off"
        {...register("first_name", {
          required: { value: true, message: "This field is required" },
          maxLength: { value: 25, message: "Maximum 25 characters" },
          pattern: { value: /[A-Za-z]+$/i, message: "This field only accept a-z or A-Z" },
        })} />
      {errors.first_name && (<span className="text-[0.6rem]  text-red-400 leading-none">{errors.first_name.message}</span>)}

      <label className="text-[#8EFF8B] text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem]" htmlFor="last_name">Last Name</label>
      <input className="bg-[#3C3C3D] border-[1px] border-[#E5E5E5] rounded-sm px-2 text-white w-[200px] outline-none" id="last_name" type="text" autoComplete="off"
        {...register("last_name", {
          required: { value: true, message: "This field is required" },
          maxLength: { value: 25, message: "Maximum 25 characters" },
          pattern: { value: /[A-Za-z]+$/i, message: "This field only accept a-z or A-Z" },
        })} />
      {errors.last_name && (<span className="text-[0.6rem]  text-red-400 leading-none">{errors.last_name.message}</span>)}

      <label className="text-[#8EFF8B] text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem]" htmlFor="email">Email address</label>
      <input className="bg-[#3C3C3D] border-[1px] border-[#E5E5E5] rounded-sm px-2 text-white w-[200px] outline-none" id="email" type="text" autoComplete="off"
        {...register("email", {
          required: { value: true, message: "This field is required" },
          maxLength: { value: 150, message: "Maximum 150 characters" },
          pattern: { value: /@/i, message: "@ Required" },
        })} />
      {errors.email && (<span className="text-[0.6rem]  text-red-400 leading-none">{errors.email.message}</span>)}


      <label className="text-[#8EFF8B] text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem]" htmlFor="password">Password</label>
      <input className="bg-[#3C3C3D] border-[1px] border-[#E5E5E5] rounded-sm px-2 text-white w-[200px] outline-none" id="password" type="password" autoComplete="off"
        {...register("password", {
          required: { value: true, message: "This field is required" },
          minLength: { value: 8, message: "Minimun 8 characters" },
          maxLength: { value: 25, message: "Maximum 25 characters" },
        })} />
      {errors.password && (<span className="text-[0.6rem]  text-red-400 leading-none">{errors.password.message}</span>)}


      <label className="text-[#8EFF8B] text-[0.6rem] md:text-[0.8rem] lg:text-[0.9rem]" htmlFor="birthday">Birthday</label>
      <input className="bg-[#3C3C3D] border-[1px] border-[#E5E5E5] rounded-sm px-2 text-white w-[200px] outline-none" id="birthday" type="date"
        {...register("birthday")} />

      <button className="bg-[#CBFFDA] w-full rounded-sm text-xs md:text-[0.8rem] lg:text-[0.9rem] h-6 mt-5 sm:mt-4 hover:bg-[#CBFFDA95] hover:text-white transition-all " type="submit"> {updateId !== null ? "Update user" : "Save User"}</button>
      <button className="bg-[#3C3C3D] w-full rounded-sm text-xs md:text-[0.8rem] lg:text-[0.9rem] text-[#CBFFDA] h-6 mb-4 hover:text-black hover:bg-[#CBFFDA10] transition-all" type="button" onClick={handleClosedModal} > or cancel</button>

    </form>
  )
}
export default Form