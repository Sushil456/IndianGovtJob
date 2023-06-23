import { Link } from "react-router-dom"


export const Card = ({ title, subtitle, buttonText, buttonColor, titleColor, subtitleColor, updates }) => {


    return (
        <>
            <div className="container mx-auto flex flex-col  py-1 relative">

                <div className="bg-white rounded-md shadow-md p-2 flex hover:shadow-lg justify-between ">

                    <div className="flex flex-col text-left w-full ">
                        <div className="flex items-center">

                            <h3 className={`text-lg font-semibold text-${titleColor}`}>{title}</h3>
                            {updates && <span className="badge text-xs bg-orange-100 rounded ml-2 px-1 py-1 ">Updates</span>}
                        </div>

                        <div className="flex items-center">
                            <p className={`text-${subtitleColor}-500 text-sm `}>{subtitle}</p>

                        </div>


                    </div>
                    <div className="flex items-center">
                        <Link to="/viewjobdetails">
                            <button className={`px-2 py-1 bg-blue-500 text-white hover:bg-blue-800 rounded-md transition-colors duration-300 hover:shadow-md`}>{buttonText}</button>
                        </Link>
                    </div>

                </div>


            </div>


        </>
    )
}