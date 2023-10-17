import { IconEdit } from "@tabler/icons-react"
import { IconTrash } from "@tabler/icons-react"


//()=>deleteUser(user.id)
// 
const Card = ({ userList, openModalDelete, handleClickUpdate }) => {

    return (
        <>
            {
                userList.map((user) =>
                    <section key={user.id} className="bg-[#E5E5E550] border p-2 rounded-md">
                        <article className=" flex w-full justify-center items-center" >
                            <div className="text-[1.1rem] sm:text-[1.4rem] flex-1 capitalize font-semibold break-words text-[#0F0F2D]">
                                {user.first_name} {user.last_name}
                                <hr />
                            </div>

                            <div className="flex gap-1 justify-center items-center pl-1">
                                <button className="w-9 h-9 text-white bg-red-500 rounded-md z-10 hover:text-gray-900 transition-colors grid place-items-center" type="button" onClick={() => openModalDelete(user.id)}><IconTrash></IconTrash></button>
                                <button className="w-9 h-9 z-10 bg-white text-gray-500 rounded-md hover:text-gray-900 transition-colors grid place-items-center" type="button" onClick={() => handleClickUpdate(user)}> <IconEdit></IconEdit> </button>
                            </div>

                        </article>
                        <article className="grid grid-cols-2  w-full text-white text-xs sm:text-base pt-4">
                            <div className=" leading-7 ">
                                <ul >
                                    <li className="text-[#D3D3D3]">Email</li>
                                    <li>{user.email}</li>
                                </ul>
                            </div>
                            <div className=" leading-7">
                                <ul >
                                    <li className="text-[#D3D3D3]">Birthday</li>
                                    <li>{user.birthday}</li>
                                </ul>
                            </div>
                        </article>
                    </section>
                )}
        </>



    )
}
export default Card