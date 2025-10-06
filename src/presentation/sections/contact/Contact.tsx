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
            value: "Madrid, Spain",
            image: locationLogo,
        }
    ]
    return (
        <>
            <p id={"contact"}></p>
            <div data-aos="zoom-in" className={"flex flex-col h-auto px-10 text-center gap-4 pt-15 pb-10 md:px-50"}>
                <h2 data-aos="zoom-in" className="subtitle">Contact</h2>
                <div data-aos="fade-right" className={"contact-info-container flex flex-col justify-center gap-15 mt-15"}>
                    <div className={""}>
                        <p className={"text"}>Always interested in new challenges where I can deliver value. If, after reviewing my profile, you find that my qualifications align with your organization's goals and the specific requirements of the role, I would be very pleased to connect.
                        </p>
                        <div className={"flex flex-col mt-10 gap-7"}>
                            {contactInfo.map((contact) => (
                                <div className={"flex flex-row gap-5"} key={contact.name}>
                                    <img src={contact.image} className={"contact-image w-12"}
                                         alt={contact.name + "logo"}/>
                                    <div>
                                        <p className={"contact-name text"}>{contact.name}</p>
                                        {contact.name.toLowerCase() === "email" ? (
                                            <div data-aos="fade-left">
                                                <a className={"text w-50 underline underline-offset-5"}
                                                   href="mailto:axeldanielrojasperez@gmail.com">{contact.value}</a>
                                            </div>
                                        ) : (
                                            <p data-aos="fade-left" className={"text w-50"}>{contact.value}</p>
                                        )}
                                    </div>
                                </div>
                        ))}
                        </div>
                    </div>
                    <div data-aos="zoom-in-left" className={"form-container p-7 shadow-2xl"}>
                        <h1 className={"contact-subtitle mb-4"}>Get in Touch</h1>
                        <form className={"flex flex-col gap-7"} action="https://formsubmit.co/axeldanielrojasperez@gmail.com" method="POST">
                            <input data-aos="fade-left" type="text" name="name" placeholder={"Your name"} required/>
                            <input data-aos="fade-left" type="email" name="email" placeholder={"Your email"} required/>
                            <textarea data-aos="fade-left" className={"h-40"} name="message" placeholder={"Your message"} required/>
                            <button data-aos="fade-left" className={"details-button h-10 justify-center"} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className={"footer-line my-15"}/>
        </>
    )
}

export default Contact