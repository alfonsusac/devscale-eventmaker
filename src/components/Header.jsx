export const Header = () => {
  return (
    <header className="flex justify-between p-3">
      <h3 className="text-base font-bold">eventMakers.</h3>
      <div className="flex space-x-2 items-center">
        <p className="text-sm">Hi, Mafatikhul Ilmi !</p>
        <button className="text-sm border-2 border-indigo-600 rounded-xl py-1 px-2">
          Logout
        </button>
      </div>
    </header>
  );
};
