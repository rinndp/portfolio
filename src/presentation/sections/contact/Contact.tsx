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
            <div className={"flex flex-col h-auto px-10 text-center gap-4 pt-15 pb-10 md:px-50"}>
                <h2 className="subtitle">Contact</h2>
                <div className={"contact-info-container flex flex-col justify-center gap-15 mt-15"}>
                    <div className={""}>
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
                                    <p className={"text w-50"}>{contact.value}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className={"form-container p-7 shadow-2xl"}>
                        <h1 className={"contact-subtitle mb-4"}>Get in Touch</h1>
                        <form className={"flex flex-col gap-7"} action="https://formsubmit.co/axeldanielrojasperez@gmail.com" method="POST">
                            <input type="text" name="name" placeholder={"Your name"} required/>
                            <input type="email" name="email" placeholder={"Your email"} required/>
                            <textarea className={"h-40"} name="message" placeholder={"Your message"} required/>
                            <button className={"details-button h-10 justify-center"} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className={"footer-line my-15"}/>
        </>
    )
}

export default Contact