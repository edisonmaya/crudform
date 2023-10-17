const NoCard = () => {
  return (
    <div className="flex flex-col w-64 gap-6 justify-center items-center pt-16">
      <img src="/EllipseUser.png" alt="" />
      <p className=" w-[220px] text-center text-[#AFAEAE] text-xs sm:w-[290px] sm:text-[1rem] sm:h-12 sm:leading-5">You do not have any users on your list. Create a new user</p>
    </div>
  )
}
export default NoCard