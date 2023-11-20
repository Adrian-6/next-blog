import LoadAnimation from './components/Loading'
export default function Loading() {
    return (
        <div className="relative w-full h-full flex">
            <div className='m-auto'>
                <LoadAnimation />
            </div>
        </div>
    )
}