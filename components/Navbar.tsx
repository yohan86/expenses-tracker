import { checkUser } from "@/lib/checkUser"
import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
   const { userId } = await auth(); // Clerk auth helper

  // Only call the DB if we actually have a Clerk User ID
  if (userId) {
    await checkUser();
  }
    return (
        <div>Navbar</div>
    )
}

export default Navbar