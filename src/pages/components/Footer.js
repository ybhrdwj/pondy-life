export default function Footer() {
    return (
        <footer className="max-w-6xl mx-auto bg-white py-4 px-6 flex overflow-x-auto justify-between items-center ">
            <div className="text-slate-600 whitespace-nowrap">made by the boys, shortly after our pondy trip</div>
            <div className="flex space-x-2 text-slate-500">
                <a href="https://x.com/neilshroff" target="_blank" rel="noopener noreferrer">@neilshroff</a>,
                <a href="https://x.com/paarugsethi" target="_blank" rel="noopener noreferrer">@paarugsethi</a>,
                <a href="https://x.com/pratikdholani" target="_blank" rel="noopener noreferrer">@pratikdholani</a>,
                <a href="https://x.com/ybhrdwj" target="_blank" rel="noopener noreferrer">@ybhrdwj</a>,
                {/* Make this last link optional based on screen size */}
                <a href="https://x.com/abhwshek" target="_blank" rel="noopener noreferrer" className="sm:block hidden">@abhwshek</a>
            </div>
        </footer>
    )
}
