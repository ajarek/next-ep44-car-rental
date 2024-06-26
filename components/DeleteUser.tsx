'use client'
type PropsDeleteUser={
  _id:string | number
  deleteItem:Function
}
import { Button } from '@/components/ui/button'

const DeleteUser = ({  _id,  deleteItem,}: PropsDeleteUser) => {
  return (
    <>
      <form
        action={async (formData) => {
          const res = await deleteItem(formData)
        }}
      >
        <input type="hidden" name="_id" value={_id} />

        <Button
          className=" bg-transparent  rounded-sm hover:bg-transparent hover:scale-105  transition"
          type="submit"
          size="sm"
        >
          ❌
        </Button>
      </form>
    </>
  )
}
export default DeleteUser
