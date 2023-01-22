import { useRouter } from 'next/router'

const My404 = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/')
    }

    return (
        <div>
            <h1>That Page is Does not Exist</h1>
            <button onClick={handleClick} className="text-xl py-2 px-4 bg-red-500 rounded text-white m-8">Go Home</button>
        </div>
    )
}

export default My404;
