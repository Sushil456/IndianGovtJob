import { Card } from "./Card"

export const Home = () => {
    return (
        <>

            <div className="flex justify-evenly xl:w-4/5">
                <div className="Results bg-green-800 px-4 m-4 w-1/3 font-extrabold text-white text-center">RESULTS</div>
                <div className="AdmitCards bg-blue-700 px-4 m-4 w-1/3 font-extrabold text-white text-center">ADMIT CARDS</div>
                <div className="Jobs bg-orange-700 px-4 m-4 w-1/3 font-extrabold text-white items-center text-center">JOBS</div>
            </div>

            <div className="flex justify-evenly xl:w-4/5">
                <div className="Jobs bg-green-50 px-4 m-4 mt-1 w-1/3 font-medium text-black text-center border-2 border-green-800">
                    <ul>
                    <Card title="Admit Title Here" subtitle="Admit Board Here" buttonText="View" buttonColor="green" titleColor="green" subtitleColor="green" updates={true} />

                    </ul>
                </div>

                <div className="AdmitCards bg-blue-50 px-4 m-4 mt-1 w-1/3 font-medium text-black items-center text-center border-2 border-blue-700">
                    <ul>
                    <Card title="Admit Title Here" subtitle="Admit Board Here" buttonText="View" buttonColor="blue" titleColor="blue" subtitleColor="blue" />
                    <Card title="Admit Title Here" subtitle="Admit Board Here" buttonText="View" buttonColor="blue" titleColor="blue" subtitleColor="blue" updates={true} />
                    <Card title="Admit Title Here" subtitle="Admit Board Here" buttonText="View" buttonColor="blue" titleColor="blue" subtitleColor="blue" />
                    </ul>
                </div>
                <div className="Results bg-orange-50 px-4 m-4 mt-1 w-1/3 font-medium text-black items-center border-2 border-orange-700 text-center">
                    <ul>
                    <Card title="Admit Title Here" subtitle="Admit Board Here" buttonText="View" buttonColor="blue" titleColor="blue" subtitleColor="blue" />

                    </ul>
                </div>



            </div>
            </>
    )
}