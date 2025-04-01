import Card from '../../components/Card/Card';


export default function HomePage() {

  return (
    <div className='p-12 w-full h-full'>
      <div className='flex justify-center items-center'>
        <h2 className='text-5xl text-(--red-primary)'>Pokédex</h2>
      </div>

      <div className="p-6 flex justify-end items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search-icon text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="input input-ghost max-w-sm w-40"
        />
      </div>

      <div className='flex flex-wrap gap-10 justify-center'>
        <Card />
      </div>
    </div>
  )
}
