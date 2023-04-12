import { contactInfo } from "../../../../constants/global"

function Contact() {
    return (
        <section id="contact" className="py-10 px-3">
            <div className="mt-8">
                <div className="text-center">
                    <h3 className="text-4xl font-semibold">
                        Contact
                        <span className="text-cyan-600"> Me</span>
                    </h3>

                    <p className="text-lg text-gray-400 mt-3">Get in touch</p>
                </div>

                <div className="mt-16 p-8 max-w-5xl mx-auto bg-gray-800 rounded-lg grid grid-cols-2 gap-y-7">
                    {contactInfo.map((contact, index) => {
                        const IconComponent = contact.icon

                        return (
                            <div key={index} className="flex items-center flex-wrap gap-4">
                                <div className="bg-cyan-600 rounded-full text-3xl p-4">
                                    <IconComponent />
                                </div>
                                <p>{contact.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Contact