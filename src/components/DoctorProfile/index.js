import {useParams} from 'react-router-dom'
import { useEffect, useState} from 'react' 
import Popup from 'reactjs-popup'
import { GiConfirmed } from "react-icons/gi";
import 'reactjs-popup/dist/index.css';

function DoctorProfile() {
    const {id} = useParams()
    const [doctorDetails, setDoctorDetails] = useState("")
    const [isPopupOpen, setPopupOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dateTime: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const fetchDoctor = async () => {
            try{
                const response = await fetch("/data/doctors.json")
                const data = await response.json()
                const foundDoctor = data.find(doc => doc.id.toString() === id)
                setDoctorDetails(foundDoctor)
            }catch(err) {
                console.log("Error fetching doctors profile", err)
            }
        }
        fetchDoctor();
    }, [id])

    const handleFormDataValue = (e) => {
        const {id, value} = e.target
        setFormData(prev => ({...prev, [id]: value}))
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        // console.log("submitted Data: ", formData)
        setIsSubmitted(true)
        formatDateTime()
    }
    const formatDateTime = () => {
        const [date, time] = formData.dateTime.split("T")
        // console.log(date)
        // console.log(time)
    }

    return (
        <>
            <div className='bg-success vh-100 d-flex flex-column justify-content-center align-items-center mw-100' style={{fontFamily: "sans-serif", fontSize:"18px"}}>        
            {!isPopupOpen && (
                <div className="card d-flex flex-row align-items-center justify-content-center flex-wrap w-70 mw-100 p-2 m-3">
                    <img src={doctorDetails.profileImg} alt='profile-img' style={{height: '150px'}} />
                    <div className='text-center d-flex flex-column align-items-center justify-content-center'>
                        <p className='text-success'>Name: {doctorDetails.name}</p>
                        <p className='text-success'>Specialization: {doctorDetails.specialization}</p>
                        <p className='text-success'>AvailabilityStatus: {doctorDetails.availabilityStatus}</p>
                    </div>
                </div>
            )
            }

            <div className="popup-container">
                <Popup 
                modal
                open={isPopupOpen}
                onClose={() => setPopupOpen(false)}
                trigger={
                    <button className="btn-outline-success border-0 p-2 text-success rounded-1 mt-3 font-weight-bold" onClick={() => setPopupOpen(true)}>Book Appointment</button>
                }>
                    {close => (
                        <>
                        {["Fully Booked" , "On Leave"].includes(doctorDetails.availabilityStatus) ? (
                            <div className='card p-5 rounded-1' style={{fontFamily: "sans-serif", fontSize:"18px"}}>
                                <p className='text-success'>Since the doctor is "{doctorDetails.availabilityStatus}" Kindly book your appointment for the upcoming days. <br />THANK YOU!!</p>
                            </div>
                        ) : isSubmitted ? (
                            <div className='d-flex flex-column justify-content-center align-items-center p-4 w-100 h-100' style={{fontFamily: "sans-serif", fontSize:"40px"}}>
                                <h1 className='text-success text-center'>Appointment Confirmed!</h1>
                                <GiConfirmed className='text-success mt-3' style={{ fontSize: "100px"}} />
                            </div>
                    ) :
                         (
                            <div className="text-success p-1 text-center w-100 mw-100" >
                                <h2 style={{fontSize: "20px"}}>Appointment Form</h2>
                                <form onSubmit={(e) => onSubmitForm(e, close)} className='p-1' style={{fontFamily: "sans-serif", fontSize:"18px"}}>
                                    <div className="d-flex flex-row flex-wrap mb-3 gap-2 mw-100">
                                        <label htmlFor="name">Patient-name: </label>
                                        <input className='form-control' style={{outline: 'none', border: '2px solid #198754'}} type="text" id="name" value={formData.name} onChange={handleFormDataValue} required />

                                    </div>
                                    <div className="d-flex flex-row flex-wrap mb-3 gap-2 mw-100">
                                        <label htmlFor="email">Patient-Email: </label>
                                        <input className='form-control' style={{outline: 'none', border: '2px solid #198754'}} type="email" id="email" value={formData.email} onChange={handleFormDataValue} required />

                                    </div>
                                    <div className="d-flex flex-row flex-wrap mb-3 gap-2 mw-100">
                                        <label htmlFor="dateTime">Select date & time: </label>
                                        <input className='form-control' style={{outline: 'none', border: '2px solid #198754'}} type="datetime-local" id="dateTime" value={formData.dateTime} onChange={(e) => (handleFormDataValue(e), e.target.blur())} required />
                                    </div>
                                    <button type="submit" className="btn btn-success font-weight-bold">Confirm Appointment</button>
                                </form>
                            </div>
                        )}
                        </>
                    )}
                </Popup>
            </div>   
            </div>          
        </>
    )

}
export default DoctorProfile;