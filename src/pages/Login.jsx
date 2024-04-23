export default function Login() {
  return (
    <>
    <div className="bg-blue-1 h-[100dvh] flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl mb-12 font-bold">Login</h1>
      <form action="">
        <div className="flex flex-col gap-4 items-center justify-center">
          <input type="text" placeholder="Correo" className="input" />
          <input type="password" placeholder="Contraseña" className="input" />
          <button type="submit" className="bg-purple rounded-2xl mt-10 w-36 h-10 p-2 flex items-center justify-center font-semibold text-blue-1">LOGIN</button>
        </div>
      </form>
    </div>
      
    </>
  );
}
