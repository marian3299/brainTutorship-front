import TableClases from "../components/TableClases";

const AdminClases = () => {
  return (
    <div className="p-4 lg:ml-52 bg-blue-1/90 min-h-screen">
      <h2 className="text-white text-3xl hidden lg:block">Clases</h2>
      <TableClases />
    </div>
  );
};

export default AdminClases;
