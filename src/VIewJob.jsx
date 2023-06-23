import { Link } from "react-router-dom"
export const ViewJob = () => {
    return (
        <>
            <div className="container my-20 bg-slate-100 p-5 xl:w-2/3 md:w-1/2 sm:1/3 mx-auto ">
                
                <div className="header m-2 p-2   bg-red-800 text-white font-semibold text-center">
                    <div className=" flex justify-between text-sm ">
                        <span className="resultbadge px-2 bg-green-400 text-green-900 rounded-full">Result</span>
                        <span className="resultbadge px-2 bg-orange-400 text-orange-900 rounded-full">Admitcard</span>
                        <span className="resultbadge px-2 bg-blue-400 text-blue-900 rounded-full">Active</span>
                        <span className="resultbadge px-2 bg-gray-400 text-gray-900 rounded-full">Expired</span>
                       
                    </div>
                    <p>------------------------------------------------------------------------------------</p>
                    <div className="postname font-extrabold mb-2 text-3xl text-center"> Bihar Police CSBC Constable Recruitment</div>
                    <div className="jobboard underline underline-offset-4">CSBC Bihar Police Constable Recruitment</div>
                    <div className="postdate ">09 June 2023 | 01:55PM</div>
                    <div className="advtno ">Advt No. 01/2023</div>
                </div>
                <div className="jobbody ">
                    <div className="feeanddate flex ">
                        <div className="examdates mx-2 mr-1 p-2 divide-y-2 divide-red-900 w-1/2 text-center border-double border-4 border-red-800">
                            <div className="title  font-semibold text-lg">Important Dates</div>
                            <div className="datedetails text-sm py-1">
                                <p className="fe mt-1">Online Apply Start on : <span> 20 june 2023</span></p>
                                <p>Online Apply Start on : <span> 20 june 2023</span></p>
                                <p>Online Apply Start on : <span> 20 june 2023</span></p>
                                <p className="lastDate bg-yellow-400 border-2 font-bold">Last date to Apply : <span> 20 june 2023</span></p>
                                <p className="examDate bg-red-300 border-2 font-bold">Exam Date : <span> 20 june 2023</span></p>
                            </div>
                        </div>
                        <div className="fees mx-2 ml-1 p-2 divide-y-2 divide-red-900 w-1/2 border-double border-4 border-red-800 text-center">
                            <div className="title  font-semibold text-lg">Application Fees</div>
                            <div className="feedetails text-sm py-1">
                                <p className="fe mt-1">Gen/EWS/BC/EBC/ candidates : <span>Rs. 675</span></p>
                                <p>Gen/EWS/BC/EBC/ candidates : <span>Rs. 675</span></p>
                                <p>Payment Mode : <span>Debit Card/ Credit Card/ Net Banking</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="vacancydetails mx-2 my-1 bg-red-800 text-white text-center ">
                        <div className="title font-bold text-2xl ">Vacancy Details</div>
                        <div className=" text-xl font-bold ">Total : 2345</div>
                    </div>
                    <div className="ageandqualification flex">
                        <div className="age mx-2 mr-1 p-2 divide-y-2 divide-red-900 w-1/2 text-center border-double border-4 border-red-800">
                            <div className="title  font-semibold text-lg ">Age Limit as on 01-08-2022</div>
                            <div className="minmax text-sm justify-between">
                                <p className="fe py-1">Minimum Age : 18yrs </p>
                                <p>Minimum Age : Gen -25 OBC-27 SC/ST-30 </p>
                                <p>Minimum Age : OBC / EBC Female -28yrs </p>
                                <p>Age Relaxation Extra as Per Rules : </p>

                            </div>
                        </div>
                        <div className="qualification mx-2 ml-1 p-2 divide-y-2 divide-red-900 w-1/2 text-center border-double border-4 border-red-800">
                            <div className="title font-semibold text-lg ">Educational Qualifications</div>
                            <div className="degreedetails text-sm">
                                <p className="bg-yellow-400 py-1 font-bold "> as on 01/08/2022 </p>
                                <p>Candidate pased 12= </p>
                                <p>For more details read notification <span >link here</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="selectionprocess m-2 p-2 divide-y-2 bg-red-800 text-white font-semibold text-center">
                        <div className="title font-bold text-2xl ">Selection Process</div>
                        <div className=" text-sm font-medium py-1 flex justify-between">
                            <span>Writtern </span>
                            <span>Physical</span>
                            <span>Interview</span>
                            <span>Medical</span>
                            <span>Prelims</span>
                            <span>Mains</span>
                        </div>
                    </div>

                    <div className="postwisedetails mx-2  p-1 divide-y-2 divide-red-900  text-center border-double border-4 border-red-800">
                        <div className="title  font-bold text-lg ">Category-wise Details</div>
                        <div className=" py-1">
                            <div className="tablesheet grid grid-cols-4">
                                <p className="serialno col-span-1">Serial Number</p>
                                <p className="category col-span-2">Category</p>
                                <p className="totalpost col-span-1">Total Post</p>
                            </div>
                        </div>
                    </div>

                    <div className="documents m-2 p-2 divide-y-2  bg-red-800 text-white font-semibold text-center">
                        <div className="title font-bold mb-1 text-lg">Document Required To Upload</div>
                        <div className="text-left text-sm py-1">
                            <p>Valid Mobile Number</p>
                            <p>Valid Email Id</p>
                            <p>Recent Passport Size Color Photo <span>jpg/png format : size -25kb</span></p>
                            <p>Scanned Hindi/ English Signature <span>jpg/png format : size -25kb</span></p>

                        </div>
                    </div>
                    <div className="salary mx-2  p-1 divide-y-2 divide-red-900  text-center border-double border-4 border-red-800">
                        <div className="title font-bold text-lg">Salary</div>
                        <div className="text-sm  font-semibold py-1"> Pay Scale - Rs. 21,700 - 69,100 -<span>Level 3</span> </div>
                    </div>


                    <div className="contacts m-2 p-2 divide-y-2  bg-red-800 text-white font-semibold text-center">
                        <div className="title font-bold text-lg ">Contacts</div>
                        <div className=" flex justify-evenly text-sm py-1">
                            <p>csbc@gmail.com</p>
                            <p>+91-908909343</p>
                        </div>
                    </div>

                    <div className="importantlinks mx-2  p-1   text-center border-double border-4 border-red-800">
                        <div className="title text-lg font-bold ">Important Links</div>


                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-base bg-gray-600 text-white  text-center">
                                <tr>
                                    <th scope="col"  >
                                        Content
                                    </th>
                                    <th scope="col" >
                                        Links
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="divide-y-2  divide-gray-600 text-center items-center">
                                <tr className="bg-white">
                                    <th scope="row" >
                                        Register & Apply
                                    </th>
                                    <td >
                                    <Link to="/viewjobdetails">
                                                <button className={`px-2 py-1 bg-blue-500 text-white hover:bg-blue-800 rounded-md transition-colors duration-300 hover:shadow-md`}>Apply Now</button>
                                            </Link>
                                    </td>
                                </tr>
                                <tr class="bg-white">
                                    <th scope="row"  >
                                        Official Notification
                                    </th>
                                    <td >
                                    <Link to="/viewjobdetails">
                                                <button className={`px-2 py-1 bg-blue-500 text-white hover:bg-blue-800 rounded-md transition-colors duration-300 hover:shadow-md`}>View & Download</button>
                                            </Link>
                                    </td>
                                </tr>
                                <tr class="bg-white">
                                    <th scope="row"  >
                                        Updated Syllabus Pattern
                                    </th>
                                    <td >
                                        
                                            <Link to="/viewjobdetails">
                                                <button className={`px-2 py-1 bg-blue-500 text-white hover:bg-blue-800 rounded-md transition-colors duration-300 hover:shadow-md`}>View & Download</button>
                                            </Link>
                                            
                                       
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                    </div>




                </div>
            </div>
        </>
    )
}