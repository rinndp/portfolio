import locationLogo from "../../../assets/location-logo.png"
import emailLogo from "../../../assets/email-logo.png"
import "./StyleContact.css"

const Contact = () => {
    const contactInfo = [
        {
            name: "Email",
            value: "axeldanielrojasperez@gmail.com",
            image: emailLogo,
        },
        {
            name: "Location",
            value: "Spain, Madrid",
            image: locationLogo,
        }
    ]
    return (
        <>
            <p id={"contact"}></p>
            <div className={"flex flex-col h-auto px-10 text-center gap-4 pt-15 pb-10 md:px-70"}>
                <h2 className="subtitle">Contact</h2>
                <div className={"flex flex-col md:flex-row justify-center gap-7 mt-15"}>
                    <div className={"md:w-1/2"}>
                        <p className={"text"}>I am always open to new opportunities where I can contribute and add
                            value. If
                            you think my profile matches what you're looking for, please don't hesitate to get in touch.
                            I'd
                            be glad to connect with you!</p>
                        <div className={"flex flex-col mt-10 gap-7"}>
                        {contactInfo.map((contact) => (
                            <div className={"flex flex-row gap-5"}>
                                <img src={contact.image} className={"contact-image w-12"} alt={contact.name+"logo"} />
                                <div>
                                    <p className={"contact-name text"}>{contact.name}</p>
                                    <p className={"text"}>{contact.value}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className={"w-1/2"}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact