import LoadAnimation from './components/Loading'
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="relative w-full h-full flex">
            <div className='m-auto'>
                <LoadAnimation />
            </div>
        </div>
    )
}