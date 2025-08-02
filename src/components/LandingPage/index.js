import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

function LandingPage() {
   const [doctors, setdoctors] = useState([])
   const [doctorName, setDoctorName] = useState("")
    
   useEffect(() => {
        if (doctorName.trim() ===  ""){
            setdoctors([])
        }
    const fetchDoctors = async () => {
        try{
            const response = await fetch("/data/doctors.json")
            const data = await response.json()
            setdoctors(data);
        } catch(err){
            console.log("Error fetching doctor data:", err)
        }
    }
    fetchDoctors();
   }, [doctorName])

   const handleDoctorName = (e) => {
        setDoctorName(e.target.value)
   }

   const findDoctor = () => {
        const searchDoctorName = doctorName.toLowerCase().replace("Dr.", "").trim()
        const filteredDoc = doctors.filter(eachDoc => {
            const normalizedDoctorName = eachDoc.name.toLowerCase().replace("Dr.", "").trim()
            return normalizedDoctorName.includes(searchDoctorName)
        }
        )
        setdoctors(filteredDoc) 
   }
   return (
    <div className="container h-100 mh-100 bg-success p-3 mw-100" style={{fontFamily: "sans-serif", fontSize:"18px"}}>
        <div className='d-flex justify-content-between mb-3 flex-wrap container mw-100 m-auto'>
            <h2 className="text-white">Doctors List</h2>
            <div className="d-flex justify-content-center gap-1 mw-100">
                <input type="text" value={doctorName} onChange={handleDoctorName} onKeyDown={(e) => {if(e.key === "Enter") findDoctor()}} placeholder="Search doctors by name...." className='bg-white border-0 rounded-1' style={{outline: "none"}}></input>
                <button onClick={findDoctor} className=" btn btn-light text-success border-0"><FaSearch /></button>
            </div>
        </div>
        {doctors.length === 0 ? (
            <p className="text-white text-center">no result found</p>
        ) : (
            doctors.map((doc) => (
            <Link to={`/profile/${doc.id}`} key={doc.id} className='text-decoration-none'>
                <ul key={doc.id} className="mw-100 card mb-3 p-2 list-unstyled shadow-lg d-flex flex-row align-items-center flex-wrap">
                        <img src={doc.profileImg} alt='profile-pic' style={{maxWidth: "100px"}} />
                    <div>
                        <li>{doc.name}</li>
                        <li>Specialization: {doc.specialization}</li>
                        <li>Availability: {doc.availabilityStatus}</li>
                    </div>
                </ul>
            </Link>
        ))
        )}
    </div>
   )
}
export default LandingPage;