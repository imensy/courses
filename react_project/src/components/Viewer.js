export default function Popup({id, name, position, img, editViewer}){
    return (
        <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={img} alt="Diva" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-md text-black font-semibold">
                    {name.slice(0,10)}
                </p>
                <p className="text-slate-500 font-medium">
                    {position.slice(0,10)}
                </p>

                
                </div>
                {editViewer}
            </div>
            </div>
    )
}