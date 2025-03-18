import { authenticate } from "@/app/lib/actions";

export default async function Page() {
  return (
    <form
      action={authenticate}
      className="flex flex-col gap-8 p-4 w-80 h-68 mt-[8%] border border-l-slate-400 rounded-sm m-auto"
    >
      <label className="text-xl" htmlFor="">
        ADMIN
      </label>
      <input
        className="p-2 border-b border-slate-400"
        type="text"
        name="user"
        placeholder="User"
        required
      />
      <input
        className="p-2 border-b border-slate-400"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button className="p-2 bg-blue-500 hover:bg-blue-600" type="submit">
        Login
      </button>
    </form>
  );
}
